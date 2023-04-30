import express from "express";

import validateResource from "../../middlewares/validateResource";
import {
    userLoginHandler,
    userRegisterHandler,
    userRefreshTokenHandler,
} from "../../controllers/cryptoket.controllers";
import { loginUserSchema } from "../../schemas/cryptoket.schemas";
import deserializeUser from "../../middlewares/deserializerCrypto";

const router = express.Router();

router.post("/auth/join", validateResource(loginUserSchema), userRegisterHandler);
router.post("/auth/login", validateResource(loginUserSchema), userLoginHandler);
router.get("/auth/refresh", userRefreshTokenHandler);
router.get("/nft", deserializeUser, () => {});

router.get("profile", () => {});

export default router;
