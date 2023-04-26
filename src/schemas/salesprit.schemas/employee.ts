import { object, string, TypeOf, number } from "zod";

export const deleteEmployeeSchema = object({
    params: object({
        employeeId: string({ required_error: "No id provided" }),
    }),
});

export const addEmployeeSchema = object({
    body: object({
        firstname: string({ required_error: "Please provide employee's first name" }),
        lastname: string({ required_error: "Please provide employee's last name" }),
        email: string({ required_error: "Please provide employee's email address" }).email("Email is not valid"),
        mobile: number({ required_error: "Please provide employee's mobile number" }),
        gender: string({ required_error: "Please provide employee's gender" }),
        role: string({ required_error: "Please provide employee's role" }),
    }),
});

export type DeleteEmployeeInput = TypeOf<typeof deleteEmployeeSchema>["params"];
export type AddEmployeeInput = TypeOf<typeof addEmployeeSchema>["body"];
