import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";



export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: false, default: '' })
    readonly name: string
    @Prop({ required: false, default: '' })
    readonly last_name: string
    @Prop({ required: false, default: '' })
    readonly psw: string
    @Prop({ required: false, default: '' })
    readonly email: string

}
export const UserSchema = SchemaFactory.createForClass(User);