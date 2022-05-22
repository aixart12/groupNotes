import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export  class UserService  {
  constructor( @Inject('USERS_REPOSITORY') private readonly userRepositoy : typeof User){}
  
  async create(createUserDto: CreateUserDto) {
    const createUser = await this.userRepositoy.create(createUserDto)
     return createUser;

  }

  async findAll() {
     const createUser = await this.userRepositoy.findAll()
    return createUser ;
  }

  async findOne(id: number) {
    const findOneUser = await   this.userRepositoy.findOne({where : {id : id}})
    return findOneUser;
  }

  async update(id: number, updateUserDto: CreateUserDto) {
    const updateUser =   await this.userRepositoy.update(updateUserDto, {where : {id}})
    return updateUser;

  }

  async remove(id: number) {
    const removeUser = await this.userRepositoy.destroy({where : {id : id}})
    return removeUser;
  }
}
