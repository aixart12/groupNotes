import { Inject, Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor( @Inject('MESSAGE_REPOSITORY') private readonly messageRepositoy : typeof Message){}
  async create(createMessageDto: CreateMessageDto) {
    const createMessage = await this.messageRepositoy.create(createMessageDto)
    return createMessage ;
  }

 async findAll() {
    return await this.messageRepositoy.findAll()
  }  
  findOneUser(name: string) {
    return `This action returns a #${name} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
