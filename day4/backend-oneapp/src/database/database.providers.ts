import { Sequelize } from "sequelize-typescript";
import { Message } from "src/messages/entities/message.entity";
import { User } from "src/user/entities/user.entity";
import { databaseConfig } from "./database.config"

export const databaseProviders = [{
    provide:'SequelizeInstance',
    useFactory : async () =>{
        let config = databaseConfig;
        const sequelize = new Sequelize(config);
        sequelize.addModels([User  , Message]);
        await sequelize.sync();
        return sequelize;

    }
}]