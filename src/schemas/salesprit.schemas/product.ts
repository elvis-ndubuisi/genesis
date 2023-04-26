import { TypeOf, object, string, number } from "zod";

export const createProductSchema = object({
    body: object({
        productName: string({ required_error: "Product name is required" }),
        productUnit: number({ required_error: "Specify product unit" }),
        productImg: string({ required_error: "Product image is required" }),
        price: number({ required_error: "Please specify a price" }),
        productCategory: string({ required_error: "Please specify product category" }),
    }),
});

export const editProductSchema = object({
    params: object({
        productId: string(),
    }),
    body: object({
        productName: string({ required_error: "Product name is required" }),
        productUnit: number({ required_error: "Specify product unit" }),
        productImg: string({ required_error: "Product image is required" }),
        price: number({ required_error: "Please specify a price" }),
        productCategory: string({ required_error: "Please specify product category" }),
    }).optional(),
});

export const deleteProductSchema = object({
    params: object({
        productId: string(),
    }),
});

export type CreateProductInput = TypeOf<typeof createProductSchema>["body"];
export type EditProductInput = TypeOf<typeof editProductSchema>;
export type DeleteProductInput = TypeOf<typeof deleteProductSchema>["params"];
