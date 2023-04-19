import { getModelForClass, prop } from "@typegoose/typegoose";

export class Product {
    @prop({ required: true, lowercase: true, trim: true })
    productName!: string;

    @prop({ required: true })
    productImg!: string;

    @prop()
    rating?: number;
}

const ProductModel = getModelForClass(Product);
export default ProductModel;
