import express from "express";

import validateResource from "../../middlewares/validateResource";
import { createNft, fetchNfts, fetchNft } from "../../controllers/cryptoket.controllers";

const router = express.Router();

router.get("/nft", fetchNft);

router.post("/nft/create", createNft);

router.get("/nft/nfts", fetchNfts);

export default router;
