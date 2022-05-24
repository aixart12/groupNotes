
import { Column, DataType, Model, Table } from "sequelize-typescript";


@Table
export class Message extends Model<Message> {
    
    @Column({
        type: DataType.STRING
    })
     name : string

    @Column({
        type : DataType.STRING
    })
     message : string
    @Column ({
        type: DataType.STRING
    })
    topic : string
}

