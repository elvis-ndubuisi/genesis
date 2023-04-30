import { object, string, TypeOf, number, any } from "zod";

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
        name: string({ required_error: "Nft name must be provided" }),
        description: string({ required_error: "Provide a description" })
            .min(10, "Minimum of 10 characters is required")
            .max(80, "Maximum of 80 characters is allowed"),
        price: string({ required_error: "Price a price for your product" }),
        cryptoType: string({ required_error: "NFT type is required" }),
    }),
});

export const fetchNftSchema = object({
    params: object({
        nftId: string({ required_error: "Can't query without identifier" }),
    }),
});

export type LoginUserInput = TypeOf<typeof loginUserSchema>["body"];
export type CreateNftInput = TypeOf<typeof createNftSchema>["body"];
export type FetchNftInput = TypeOf<typeof fetchNftSchema>["params"];
