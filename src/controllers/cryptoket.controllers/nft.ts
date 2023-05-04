import { Request, Response } from "express";
import logger from "../../helpers/logger";
import cloudinaryService from "../../services/cloudinary.service";
import { fetchNftByIdService, createNftService, fetchNftsService } from "../../services/cryptoket.services";
import { CreateNftInput, FetchNftsInput, FetchNftInput } from "../../schemas/cryptoket.schemas";

async function createNftHandler(req: Request<{}, {}, CreateNftInput>, res: Response) {
    try {
        if (!req.file) return res.send("no file");
        const cloudUri = await cloudinaryService(req.file.path, { folder: "cryptoket" });
        const nft = await createNftService({
            ...req.body,
            nftImage: {
                created_at: cloudUri.created_at,
                format: cloudUri.format,
                resource_type: cloudUri.resource_type,
                secure_url: cloudUri.secure_url,
                url: cloudUri.url,
            },
        });
        res.status(201).json({
            message: "Nft created successfully",
            data: nft,
        });
    } catch (error: any) {
        logger.debug(error);
        if (error?.code === 11000) return res.status(409).send("Nft name already exists");
        res.status(500).json(error);
    }
}

async function fetchNftsHandler(req: Request<{}, {}, {}, FetchNftsInput>, res: Response) {
    /* Initial request query */
    let page = parseInt(req.query.page);
    let size = req.query.size ? parseInt(req.query.size) : 4; /* Number of nft object in each payload */
    page === 0 ? (page = 1) : (page = page); /* Current nft objects after skips */

    try {
        const limit = size;
        const skip = (page - 1) * size; /* Number to document to skip */

        const data = await fetchNftsService(limit, skip);

        res.status(200).json({
            page: page,
            size: size,
            data: data,
        });
    } catch (error: any) {
        logger.error(error);
        res.sendStatus(500);
    }
}

async function fetchNftHandler(req: Request<FetchNftInput, {}>, res: Response) {
    try {
        const nft = await fetchNftByIdService(req.params.nftId);
        res.send(nft);
    } catch (error: any) {
        logger.error(error);
        res.sendStatus(500);
    }
}

export { createNftHandler, fetchNftsHandler, fetchNftHandler };
