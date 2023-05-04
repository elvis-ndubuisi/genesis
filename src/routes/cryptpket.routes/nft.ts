import express from "express";
import validateResource from "../../middlewares/validateResource";
import multerUpload from "../../middlewares/multerUpload";
import authUser from "../../middlewares/authUser";
import deserializeCryptoUser from "../../middlewares/deserializeCrypto";
import { createNftHandler, fetchNftsHandler, fetchNftHandler } from "../../controllers/cryptoket.controllers";
import { createNftSchema, fetchNftSchema, fetchNftsSchema } from "../../schemas/cryptoket.schemas";

const router = express.Router();

router.post(
    "/create",
    deserializeCryptoUser,
    authUser,
    multerUpload.single("image"),
    validateResource(createNftSchema),
    createNftHandler
);

router.get("/", deserializeCryptoUser, authUser, validateResource(fetchNftsSchema), fetchNftsHandler);

router.get("/:id", deserializeCryptoUser, authUser, fetchNftHandler);

export default router;
