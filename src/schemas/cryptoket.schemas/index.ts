import { object, string, TypeOf, number } from "zod";

export const loginUserSchema = object({
    body: object({
        username: string({ required_error: "Username isn't provided" }),
        password: string({ required_error: "Password must be provided" }).min(
            6,
            "Your password should be less or above 6 characters"
        ),
    }),
});

export const createNftSchema = object({
    body: object({
        image: string({ required_error: "Nft item must be provided" }),
        name: string({ required_error: "Nft name must be provided" }),
        description: string({ required_error: "Provide a description" })
            .min(60, "Minimum of 60 characters is required")
            .max(80, "Maximum of 100 characters is allowed"),
        price: number({ required_error: "Price a price for your product" }),
        type: string({ required_error: "NFT type is required" }),
    }),
});

export type LoginUserInput = TypeOf<typeof loginUserSchema>["body"];
export type CreateNftInput = TypeOf<typeof createNftSchema>["body"];
