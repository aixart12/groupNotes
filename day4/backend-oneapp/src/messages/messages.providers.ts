import { Message } from "./entities/message.entity";


export const messageProviders =[ {
    provide : "MESSAGE_REPOSITORY"  ,
    useValue : Message 
} ]