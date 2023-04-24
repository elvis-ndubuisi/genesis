import express from "express";

import adminRoutes from "./admin";
import productRoutes from "./product";

const router = express.Router();

router.use("salesprit", adminRoutes);
router.use("salesprit", productRoutes);

export default router;
