import { Request, Response } from "express";

import logger from "../../helpers/logger";
import { createNftSchema, CreateNftInput, loginUserSchema, LoginUserInput } from "../../schemas/cryptoket.schemas";
import { createUser } from "../../services/crytpoket.services";

export async function userRegister(req: Request<{}, {}, LoginUserInput>, res: Response) {
    try {
        const user = await createUser(req.body);
        res.status(201).send("You successfully registered");
    } catch (error: any) {
        if (error?.code === 11000) {
            return res.status(409).send("Account already exists");
        }

        res.status(400).send(error?.message);
    }
}

export async function userLogin(req: Request<{}, {}, LoginUserInput>, res: Response) {}

export async function createNft(req: Request, res: Response) {}

export async function fetchNfts(req: Request, res: Response) {}

export async function fetchNft(req: Request, res: Response) {}

export async function fetchUserNfts(req: Request, res: Response) {}
