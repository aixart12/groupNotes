import { Injectable } from "@nestjs/common";
import { databaseConfig } from "./database.config";

@Injectable()
export class DatabaseService {
    get sequelizeOrmConfig() {
        return databaseConfig;
    }
}