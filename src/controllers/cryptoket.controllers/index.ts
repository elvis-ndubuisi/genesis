import { Request, Response } from "express";
import logger from "../../helpers/logger";
import { CreateNftInput } from "../../schemas/cryptoket.schemas";
import { userLoginHandler, userRefreshTokenHandler, userRegisterHandler } from "./user";
import cloudinaryService from "../../services/cloudinary.service";
import { fetchNftByIdService, createNftService } from "../../services/cryptoket.services";

export async function createNftHandler(req: Request<{}, {}, CreateNftInput>, res: Response) {
    try {
        if (!req.file) return null;
        const cloudUri = await cloudinaryService(req.file.path, { folder: "nft", id: req.file.originalname });
        const nft = await createNftService({ ...req.body, uri: cloudUri.secure_url });
        res.send("create nft");
    } catch (error: any) {
        res.status(500).json(error);
    }
}

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

export { userRegisterHandler, userLoginHandler, userRefreshTokenHandler };
