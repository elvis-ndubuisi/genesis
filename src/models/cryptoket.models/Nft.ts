import { prop, getModelForClass, modelOptions, Ref, Severity } from "@typegoose/typegoose";
import { User } from ".";

export const nftPrivateFields = ["_v"];

@modelOptions({
    schemaOptions: { timestamps: true },
    options: { allowMixed: Severity.ALLOW },
})
export class Nft {
    @prop({ required: true, trim: true, lowercase: true, unique: true })
    name!: string;

    @prop({ required: true, trim: true })
    price!: string;

    @prop({ trim: true, lowercase: true })
    description!: string;

    @prop()
    cryptoType!: string;

    @prop({ required: true })
    nftImage!: { resource_type: string; url: string; secure_url: string; format: string; created_at: string };

    @prop({ ref: () => User, required: true })
    author!: Ref<User>;
}

export const NftModel = getModelForClass(Nft);
