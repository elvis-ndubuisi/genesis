import { Request, Response } from "express";

import logger from "../../helpers/logger";
import { createNftSchema, CreateNftInput, loginUserSchema, LoginUserInput } from "../../schemas/cryptoket.schemas";
import { createUserService, findUserByNameService } from "../../services/cryptoket.services";
import { signJwt } from "../../helpers/jwt";

export async function userRegisterHandler(req: Request<{}, {}, LoginUserInput>, res: Response) {
    try {
        await createUserService(req.body);
        res.status(201).send("You successfully registered");
    } catch (error: any) {
        if (error?.code === 11000) {
            return res.status(409).send("Account already exists");
        }

        res.status(500).send(error?.message);
    }
}

export async function userLoginHandler(req: Request<{}, {}, LoginUserInput>, res: Response) {
    const { username, password } = req.body;
    try {
        const user = await findUserByNameService(username);

        if (!user) return res.status(401).send("Invalid username or password");

        const isValid = await user.checkPassword(password);
        if (!isValid) return res.status(401).send("Invalid username or password");

        // Sign tokens
        res.send("tokens");
    } catch (error: any) {
        res.status(500).send("Something went wrong");
    }
}

export async function createNftHandler(req: Request<CreateNftInput>, res: Response) {
    res.send("create nft");
}

export async function fetchNftsHandler(req: Request, res: Response) {
    res.send("fetch nfts");
}

export async function fetchNftHandler(req: Request, res: Response) {
    res.send("fetch single nft details");
}

export async function fetchUserNftsHandler(req: Request, res: Response) {
    res.send("fetch user nfts");
}
