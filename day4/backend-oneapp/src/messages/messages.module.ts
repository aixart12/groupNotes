import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { messageProviders } from './messages.providers';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService , ...messageProviders]
})
export class MessagesModule {}
