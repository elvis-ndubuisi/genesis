import { TypeOf, object, string } from "zod";

export const createProfile = object({
    body: object({
        email: string(),
        password: string(),
        confirmPassword: string(),
    }),
});

export const editProfile = object({
    body: object({
        firstname: string(),
        lassname: string(),
        email: string(),
        phone: string(),
        dob: string(),
        position: string(),
    }),
    params: object({
        userId: string(),
    }),
});

/* Export types */
export type CreateProfile = TypeOf<typeof createProfile>["body"];
export type EditProfile = TypeOf<typeof editProfile>["body" | "params"];
