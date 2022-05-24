import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { DatabaseService } from './databse.service';

@Module({
    providers: [DatabaseService , ...databaseProviders] ,
    exports : [ ...databaseProviders]
})
export class DatabaseModule {}
