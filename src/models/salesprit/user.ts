import argon2 from "argon2";
import { getModelForClass, prop } from "@typegoose/typegoose";

// User Schema
export class User {
    @prop({ required: true, trim: true })
    username!: string;
}

const UserModel = getModelForClass(User);
export default UserModel;
