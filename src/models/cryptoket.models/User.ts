import { prop, getModelForClass, modelOptions, Severity, pre, DocumentType } from "@typegoose/typegoose";
import argon2 from "argon2";
import logger from "../../helpers/logger";

export const privateFields = ["password", "checkPassword"];

@pre<User>("save", async function () {
    if (!this.isModified("password")) return; /* If password isn't modified */
    const hash = await argon2.hash(this.password);
    this.password = hash;
    return;
})
@modelOptions({
    schemaOptions: { timestamps: false },
    options: { allowMixed: Severity.ALLOW },
})
export class User {
    @prop({ required: true, trim: true, lowercase: true, unique: true })
    username!: string;

    @prop({ required: true })
    password!: string;

    async checkPassword(this: DocumentType<User>, incomingPassword: string) {
        try {
            return await argon2.verify(this.password, incomingPassword);
        } catch (error: any) {
            logger.debug("Couldn't validate password");
            return false;
        }
    }
}

export const UserModel = getModelForClass(User);
