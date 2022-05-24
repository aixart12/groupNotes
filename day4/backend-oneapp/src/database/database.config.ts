import { SequelizeOptions } from "sequelize-typescript";

 export const databaseConfig : SequelizeOptions  = {
    username : "postgres",
    password : "postgres",
    database : "person",
    host : "localhost",
    port : 5425, 
    dialect: "postgres",
    logging : console.log ,
}