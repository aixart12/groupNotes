import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private usersServices : UserService ,
        private jwtService : JwtService
        ) {}

    async validateUser(name: string , pass: string): Promise<any> {
        const user = await this.usersServices.findOne(name)
        console.log(user)
        if(user && user.password === pass){
            const { password, ...result} = user;
            return result
        }
        return null
    }
    async login(user: CreateUserDto){
        const payload = {username: user.username, password:user.password};
        // console.log(pa)
        console.log("---user--",user)
        return {
            access_token : this.jwtService.sign(payload)
        }
    }
}
