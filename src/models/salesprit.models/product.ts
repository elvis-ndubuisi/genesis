import { getModelForClass, prop } from "@typegoose/typegoose";

export class SalesProduct {
    @prop({ required: true, lowercase: true, trim: true })
    productName!: string;

    @prop({ required: true })
    productImg!: string;

    @prop()
    rating?: number;
}

const SalesProductModel = getModelForClass(SalesProduct);
export default SalesProductModel;
