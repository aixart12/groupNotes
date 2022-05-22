import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user';
import { DatabaseModule } from './database/database.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [UserModule, DatabaseModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService, User],
})
export class AppModule {}
