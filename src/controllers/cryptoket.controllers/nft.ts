import { Request, Response } from "express";
import logger from "../../helpers/logger";
import cloudinaryService from "../../services/cloudinary.service";
import { fetchNftByIdService, createNftService } from "../../services/cryptoket.services";
import { CreateNftInput } from "../../schemas/cryptoket.schemas";

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

export { createNftHandler };
