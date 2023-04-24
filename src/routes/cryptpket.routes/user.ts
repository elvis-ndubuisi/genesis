import express from "express";

import validateResource from "../../middlewares/validateResource";
import { userLogin, userRegister } from "../../controllers/cryptoket.controllers";
import { loginUserSchema } from "../../schemas/cryptoket.schemas";

const router = express.Router();

router.post("/auth/join", validateResource(loginUserSchema), userRegister);

router.post("auth/login", validateResource(loginUserSchema), userLogin);

router.get("profile", () => {});

router.get("nfts");

export default router;
