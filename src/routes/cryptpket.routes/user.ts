import express from "express";
import deserializeCryptoUser from "../../middlewares/deserializeCrypto";
import authUser from "../../middlewares/authUser";
import validateResource from "../../middlewares/validateResource";
import {
    userLoginHandler,
    userRegisterHandler,
    userRefreshTokenHandler,
} from "../../controllers/cryptoket.controllers";
import { loginUserSchema, refreshTokenSchema, fetchNftSchema } from "../../schemas/cryptoket.schemas";
import deserializeUser from "../../middlewares/deserializeCrypto";

const router = express.Router();

router.post("/auth/join", validateResource(loginUserSchema), userRegisterHandler);
router.post("/auth/login", validateResource(loginUserSchema), userLoginHandler);
router.post("/auth/refresh", validateResource(refreshTokenSchema), userRefreshTokenHandler);
router.get("/nft", validateResource(fetchNftSchema), deserializeUser, () => {});

router.get("/profile", deserializeCryptoUser, authUser, () => {});

export default router;
