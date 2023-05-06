import express from "express";

import userRoutes from "./user";
import productRoutes from "./product";
import employeeRoutes from "./employee";

const router = express.Router();

router.use("/salesprit/user", userRoutes);
router.use("/salesprit/product", productRoutes);
router.use("/salesprit/employee", employeeRoutes);

export default router;
