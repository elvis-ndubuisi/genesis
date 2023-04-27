import express from "express";

import validateResource from "../../middlewares/validateResource";
import { createNftHandler, fetchNftsHandler, fetchNftHandler } from "../../controllers/cryptoket.controllers";

const router = express.Router();

router.get("/", fetchNftHandler);

router.post("/create", createNftHandler);

router.get("/nfts", fetchNftsHandler);

export default router;
