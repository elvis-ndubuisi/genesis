import { Request, Response } from "express";
import { LoginUserInput, RegisterUserInput, EditUserProfileInput } from "../../schemas/salesprit.schemas";

export async function registerUserHandler(req: Request<{}, {}, RegisterUserInput>, res: Response) {}

export async function loginUserHandler(req: Request<{}, {}, LoginUserInput>, res: Response) {}

export async function editUserProfileHandler(req: Request<{}, {}, EditUserProfileInput>, res: Response) {}
