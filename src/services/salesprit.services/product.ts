import { SalesProduct, SalesProductModel } from "../../models/salesprit.models";

export function createProductService(product: Partial<SalesProduct>) {
    return SalesProductModel.create(product);
}

export function deleteProductService() {}
