import { prop, getModelForClass } from "@typegoose/typegoose";

export class SalesEmployee {
    @prop({ required: true })
    firstname!: string;

    @prop({ required: true })
    lastname!: string;

    @prop({ required: true, lowercase: true })
    email!: string;

    @prop()
    phone!: string;

    @prop()
    gender!: "male" | "female";

    @prop()
    role?: string;
}

const SalesEmployeeModel = getModelForClass(SalesEmployee);
export default SalesEmployeeModel;
