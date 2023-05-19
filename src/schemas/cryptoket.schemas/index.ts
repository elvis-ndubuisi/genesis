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
        name: string({ required_error: "Nft name must be provided" })
            .min(20, "Minimum of 10 characters is required")
            .max(30, "Maximum of 20 characters is required"),
        description: string({ required_error: "Provide a description" })
            .min(90, "Minimum of 30 characters is required")
            .max(240, "Maximum of 80 characters is allowed"),
        price: string({ required_error: "Price a price for your product" }),
        cryptoType: string({ required_error: "NFT type is required" }),
    }),
});

export const fetchNftSchema = object({
    params: object({
        nftId: string({ required_error: "Can't query without NFT identifier" }),
    }),
});

export const fetchNftsSchema = object({
    query: object({
        page: string({ required_error: "Provide pagination page number" }),
        size: string({ required_error: "Provide a payload size" }).optional(),
    }),
});

export const refreshTokenSchema = object({
    body: object({
        refreshToken: string({ required_error: "Missing token" }),
    }),
});

export const fetchUserNftsSchema = object({
    params: object({
        userId: string({ required_error: "Missing user Identifier" }),
    }),
    query: object({
        page: string({ required_error: "Page size required" }),
        size: string({ required_error: "Provide page data size" }).optional(),
    }),
});

export type LoginUserInput = TypeOf<typeof loginUserSchema>["body"];
export type CreateNftInput = TypeOf<typeof createNftSchema>["body"];
export type FetchNftInput = TypeOf<typeof fetchNftSchema>["params"];
export type FetchNftsInput = TypeOf<typeof fetchNftsSchema>["query"];
export type RefreshTokenInput = TypeOf<typeof refreshTokenSchema>["body"];
export type FetchUserNftsInput = TypeOf<typeof fetchUserNftsSchema>;
