import { prop, getModelForClass, modelOptions, Ref } from "@typegoose/typegoose";
import { User } from ".";

export const nftPrivateFields = ["_v"];

@modelOptions({
    schemaOptions: { timestamps: true },
})
export class Nft {
    @prop({ required: true, trim: true, lowercase: true })
    name!: string;

    @prop({ required: true, trim: true })
    price!: string;

    @prop({ trim: true, lowercase: true })
    description!: string;

    @prop()
    cryptoType!: string;

    @prop()
    uri!: string;

    @prop({ ref: () => User })
    author!: Ref<User>;
}

export const NftModel = getModelForClass(Nft);
