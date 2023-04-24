import { prop, getModelForClass, Ref, modelOptions, Severity } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions: { timestamps: false },
    options: { allowMixed: Severity.ALLOW },
})
export class User {
    @prop({ required: true, trim: true, lowercase: true, unique: true })
    username!: string;

    @prop({ required: true })
    password!: string;
}

export const UserModel = getModelForClass(User);
