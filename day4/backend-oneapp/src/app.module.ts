import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user';
import { DatabaseModule } from './database/database.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { LocalStrategy } from './auth/local.strategy';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [UserModule, DatabaseModule, MessagesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, User],
})
export class AppModule {}
