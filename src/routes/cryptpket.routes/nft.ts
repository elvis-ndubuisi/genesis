import express from "express";
import validateResource from "../../middlewares/validateResource";
import multerUpload from "../../middlewares/multerUpload";
import authUser from "../../middlewares/authUser";
import deserializeCryptoUser from "../../middlewares/deserializeCrypto";
import { createNftHandler, fetchNftsHandler, fetchNftHandler } from "../../controllers/cryptoket.controllers";
import { createNftSchema, fetchNftSchema } from "../../schemas/cryptoket.schemas";

const router = express.Router();

router.get("/", deserializeCryptoUser, authUser, fetchNftHandler);

router.post(
    "/create",
    deserializeCryptoUser,
    authUser,
    multerUpload.single("image"),
    validateResource(createNftSchema),
    createNftHandler
);

router.get("/nft", deserializeCryptoUser, authUser, fetchNftsHandler);

router.get("/nft/:id", deserializeCryptoUser, authUser, validateResource(fetchNftSchema), () => {});

export default router;
