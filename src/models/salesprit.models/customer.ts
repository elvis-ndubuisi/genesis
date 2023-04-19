import { prop, getModelForClass, index } from "@typegoose/typegoose";

export class Customer {
    @prop({ required: true, trim: true })
    name!: string;

    @prop({ default: 0 })
    orders?: number;

    @prop({ default: 0 })
    spent?: number;

    @prop({ required: true })
    gender!: "male" | "female";

    @prop()
    address?: string;
}

const CustomerModel = getModelForClass(Customer);
export default CustomerModel;
