import { object, string, TypeOf } from "zod";

const addEmployee = object({
    body: object({
        firstname: string({ required_error: "First name is required" }),
        lastname: string({ required_error: "last name is required" }),
        email: string({ required_error: "Email is required" }).email({ message: "Invalid email" }),
        gender: string({ required_error: "Please specify your gender" }),
        role: string({ required_error: "Please specify a role" }),
    }),
});
