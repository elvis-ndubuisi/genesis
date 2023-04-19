import { TypeOf, object, string } from "zod";

export const createNewProduct = object({
    body: object({
        productName: string({ required_error: "Product name is required" }),
    }),
});

export const editProduct = object({
    params: object({
        productId: string(),
    }),
});

export const deleteProduct = object({
    params: object({
        productId: string(),
    }),
});

export type CreateNewProduct = TypeOf<typeof createNewProduct>["body"];
export type EditProduct = TypeOf<typeof editProduct>;
export type DeleteProduct = TypeOf<typeof deleteProduct>;
