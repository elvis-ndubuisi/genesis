import { prop, getModelForClass } from "@typegoose/typegoose";

export class Employee {
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

const EmployeeModel = getModelForClass(Employee);
export default EmployeeModel;
