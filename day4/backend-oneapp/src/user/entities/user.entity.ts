
import { Column, DataType, Model, Table } from "sequelize-typescript";


@Table
export class User extends Model<User> {
    
    @Column
     name : string
    
    @Column ({
        type : DataType.STRING
    })
    password : string
     

    

}
