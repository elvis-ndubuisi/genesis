import express from "express";
import deserializeCryptoUser from "../../middlewares/deserializeCrypto";
import authUser from "../../middlewares/authUser";
import validateResource from "../../middlewares/validateResource";
import {
    userLoginHandler,
    userRegisterHandler,
    userRefreshTokenHandler,
    userNftsHandler,
} from "../../controllers/cryptoket.controllers";
import { loginUserSchema, refreshTokenSchema, fetchUserNftsSchema } from "../../schemas/cryptoket.schemas";
import deserializeUser from "../../middlewares/deserializeCrypto";

const router = express.Router();

router.post("/auth/join", validateResource(loginUserSchema), userRegisterHandler);
router.post("/auth/login", validateResource(loginUserSchema), userLoginHandler);
router.post("/auth/refresh", validateResource(refreshTokenSchema), userRefreshTokenHandler);
router.get("/nft/:userId", deserializeCryptoUser, authUser, validateResource(fetchUserNftsSchema), userNftsHandler);

export default router;
