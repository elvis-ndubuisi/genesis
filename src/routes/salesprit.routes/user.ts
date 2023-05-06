import express from "express";
import validateResource from "../../middlewares/validateResource";
import { editUserProfileHandler, loginUserHandler, registerUserHandler } from "../../controllers/salesprit.controllers";
import { editUserProfileSchema, loginUserSchema, registerUserSchema } from "../../schemas/salesprit.schemas";

const router = express.Router();

router.post("/register", validateResource(registerUserSchema), registerUserHandler);
router.post("/login", validateResource(loginUserSchema), loginUserHandler);
router.patch("/edit", validateResource(editUserProfileSchema), editUserProfileHandler);

export default router;
