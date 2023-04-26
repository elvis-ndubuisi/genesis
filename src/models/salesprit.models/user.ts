import argon2 from "argon2";
import { getModelForClass, DocumentType, prop, pre } from "@typegoose/typegoose";

@pre<User>("save", async function () {
    if (!this.isModified("password")) return;
    const hash = await argon2.hash(this.password);
    this.password = hash;
    return;
})
export class User {
    @prop({ trim: true })
    firstname!: string;

    @prop({ trim: true })
    lastname!: string;

    @prop({ required: true })
    email!: string;

    @prop({ required: true })
    password!: string;

    @prop()
    phone!: string;

    @prop()
    dob!: string;

    @prop()
    position!: string;

    //#region User schema class methods
    async comparePassword(self: DocumentType<User>, incomingPassword: string) {
        try {
            return await argon2.verify(self.password, incomingPassword);
        } catch (error: any) {
            return false;
        }
    }
    //#endregion
}

const UserModel = getModelForClass(User);
export default UserModel;
