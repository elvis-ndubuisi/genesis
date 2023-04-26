import { TypeOf, object, string, number } from "zod";

export const registerUserSchema = object({
    body: object({
        email: string({ required_error: "Email is required" }),
        password: string({ required_error: "Password is required" }).min(6, "Minium of 6 characters is required"),
        confirmPassword: string({ required_error: "Confirm password is required" }),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    }),
});

export const editUserProfileSchema = object({
    body: object({
        firstname: string(),
        lassname: string(),
        email: string().email("Not a valid email"),
        phone: string(),
        dob: string().datetime("Date format not recognized"),
        position: string(),
    }),
});

export const loginUserSchema = object({
    body: object({
        email: string({ required_error: "Email is required" }).email("Invalid email"),
        password: string({ required_error: "Password is required" }),
    }),
});

/* Export types */
export type RegisterUserInput = TypeOf<typeof registerUserSchema>["body"];
export type EditUserProfileInput = TypeOf<typeof editUserProfileSchema>["body"];
export type LoginUserInput = TypeOf<typeof loginUserSchema>["body"];
