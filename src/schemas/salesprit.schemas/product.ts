import { TypeOf, object, string, number } from "zod";

export const createNewProduct = object({
    body: object({
        productName: string({ required_error: "Product name is required" }),
        productImg: string({ required_error: "Product image is required" }),
        productQty: number(),
        price: number({ required_error: "Please specify a price" }),
        productCategory: string({ required_error: "Please specify product category" }),
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
