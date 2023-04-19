import { getModelForClass, prop } from "@typegoose/typegoose";

export class Product {
    @prop({ required: true, lowercase: true, trim: true })
    productName!: string;
}

const ProductModel = getModelForClass(Product);
export default ProductModel;
