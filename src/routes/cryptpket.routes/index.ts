import express from "express";
import cors from "cors";
import config from "config";
import userRoutes from "./user";
import nftRoutes from "./nft";

const router = express.Router();

router.use("/user", cors({ origin: config.get<string>("origin.cryptoket") }), userRoutes);
router.use("/nft", cors({ origin: config.get<string>("origin.cryptoket") }), nftRoutes);

export default router;
