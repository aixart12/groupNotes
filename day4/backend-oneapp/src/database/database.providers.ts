import { Sequelize } from "sequelize-typescript";
import { User } from "src/user/entities/user.entity";
import { databaseConfig } from "./database.config"

export const databaseProviders = [{
    provide:'SequelizeInstance',
    useFactory : async () =>{
        let config = databaseConfig;
        const sequelize = new Sequelize(config);
        sequelize.addModels([User]);
        await sequelize.sync();
        return sequelize;

    }
}]