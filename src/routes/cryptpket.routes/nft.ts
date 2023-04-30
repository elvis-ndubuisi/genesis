import express from "express";
import validateResource from "../../middlewares/validateResource";
import multerUpload from "../../middlewares/multerUpload";
import { createNftHandler, fetchNftsHandler, fetchNftHandler } from "../../controllers/cryptoket.controllers";
import { createNftSchema, fetchNftSchema } from "../../schemas/cryptoket.schemas";

const router = express.Router();

router.get("/", fetchNftHandler);

router.post("/create", multerUpload.single("image"), validateResource(createNftSchema), createNftHandler);

router.get("/nft", fetchNftsHandler);

router.get("/nft/:id", validateResource(fetchNftSchema), () => {});

export default router;
