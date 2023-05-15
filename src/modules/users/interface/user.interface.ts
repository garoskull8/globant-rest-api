import { Document } from "mongoose";


export interface User extends Document {
    _id: string
    name: string
    last_name:string
    email:string
    psw:string
}