import express from "express";

import userRoutes from "./user";
import nftRoutes from "./nft";

const router = express.Router();

router.use("/cryptoket", userRoutes);
router.use("/cryptoket", nftRoutes);

export default router;
