import { Request, Response } from "express";
import { userLoginHandler, userRefreshTokenHandler, userRegisterHandler } from "./user";
import { createNftHandler } from "./nft";
import { fetchNftByIdService } from "../../services/cryptoket.services";

export async function fetchNftsHandler(req: Request, res: Response) {
    res.send("fetch nfts");
}

export async function fetchNftHandler(req: Request, res: Response) {
    try {
        const nft = await fetchNftByIdService("idf");
    } catch (error: any) {}
}

export async function fetchUserNftsHandler(req: Request, res: Response) {
    res.send("fetch user nfts");
}

export { userRegisterHandler, userLoginHandler, userRefreshTokenHandler, createNftHandler };
