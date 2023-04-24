import express from "express";

import { createNft, fetchNfts, fetchNft } from "../../controllers/cryptoket.controllers";

const router = express.Router();

router.post("create", createNft);

router.get("nft", fetchNft);

router.get("nft/all", fetchNfts);

export default router;
