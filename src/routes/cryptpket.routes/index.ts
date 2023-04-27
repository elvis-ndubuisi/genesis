import express from "express";

import userRoutes from "./user";
import nftRoutes from "./nft";

const router = express.Router();

router.use("/user", userRoutes);
router.use("/nft", nftRoutes);

export default router;
