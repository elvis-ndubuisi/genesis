import { Request, Response } from "express";

export async function createProductHandler(req: Request<{}, {}, {}>, res: Response) {
    res.send("create product");
}

export async function deleteProductHandler(req: Request, res: Response) {
    res.send("delete product");
}

export async function editProductHandler(req: Request, res: Response) {
    res.send("edit product");
}

export async function fetchProductsHandler(req: Request, res: Response) {
    res.send("get products for product screen");
}

export async function getSalesProductHandler(req: Request, res: Response) {
    res.send("all products for main screen");
}
