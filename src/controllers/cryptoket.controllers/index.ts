import { Request, Response } from "express";
import logger from "../../helpers/logger";
import { userLoginHandler, userRefreshTokenHandler, userRegisterHandler } from "./user";
import { createNftHandler } from "./nft";
import { CreateNftInput } from "../../schemas/cryptoket.schemas";
import cloudinaryService from "../../services/cloudinary.service";
import { fetchNftByIdService, createNftService } from "../../services/cryptoket.services";

// export async function createNftHandler(req: Request<{}, {}, CreateNftInput>, res: Response) {
//     try {
//         if (!req.file) return res.send("no file");
//         const cloudUri = await cloudinaryService(req.file.path, { folder: "cryptoket" });
//         const nft = await createNftService({
//             ...req.body,
//             nftImage: {
//                 created_at: cloudUri.created_at,
//                 format: cloudUri.format,
//                 resource_type: cloudUri.resource_type,
//                 secure_url: cloudUri.secure_url,
//                 url: cloudUri.url,
//             },
//         });
//         res.status(201).json({
//             message: "Nft created successfully",
//             data: nft,
//         });
//     } catch (error: any) {
//         logger.debug(error);
//         res.status(500).json(error);
//     }
// }

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
