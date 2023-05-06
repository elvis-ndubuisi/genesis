import express from "express";
import validateResource from "../../middlewares/validateResource";
import {
    editProductHandler,
    createProductHandler,
    deleteProductHandler,
    getSalesProductHandler,
    fetchProductsHandler,
} from "../../controllers/salesprit.controllers";
import { createProductSchema, editProductSchema, deleteEmployeeSchema } from "../../schemas/salesprit.schemas";

const router = express.Router();

router.post("/create", validateResource(createProductSchema), createProductHandler);
router.delete("/delete", validateResource(deleteEmployeeSchema), deleteProductHandler);
router.patch("/edit", validateResource(editProductSchema), editProductHandler);
router.get("/sales", getSalesProductHandler);
router.get("/products", fetchProductsHandler);

export default router;
