import { Request, Response } from "express";

import logger from "../../helpers/logger";
import { createNftSchema, CreateNftInput, loginUserSchema, LoginUserInput } from "../../schemas/cryptoket.schemas";
import { createUser, findUserByName } from "../../services/crytpoket.services";

export async function userRegister(req: Request<{}, {}, LoginUserInput>, res: Response) {
    try {
        await createUser(req.body);
        res.status(201).send("You successfully registered");
    } catch (error: any) {
        if (error?.code === 11000) {
            return res.status(409).send("Account already exists");
        }

        res.status(500).send(error?.message);
    }
}

export async function userLogin(req: Request<{}, {}, LoginUserInput>, res: Response) {
    const { username, password } = req.body;
    try {
        const user = await findUserByName(username);

        if (!user) return res.status(401).send("Invalid username or password");

        const isValid = await user.checkPassword(password);
        if (!isValid) return res.status(401).send("Invalid username or password");

        // Sign tokens
        res.send("tokens");
    } catch (error: any) {
        res.status(500).send("Something went wrong");
    }
}

export async function createNft(req: Request<CreateNftInput>, res: Response) {
    res.send("create nft");
}

export async function fetchNfts(req: Request, res: Response) {
    res.send("fetch nfts");
}

export async function fetchNft(req: Request, res: Response) {
    res.send("fetch single nft details");
}

export async function fetchUserNfts(req: Request, res: Response) {
    res.send("fetch user nfts");
}
