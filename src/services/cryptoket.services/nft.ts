import { DocumentType } from "@typegoose/typegoose";
import { Nft, NftModel, nftPrivateFields } from "../../models/cryptoket.models";

export function fetchNftsService(limit: number, skip: number) {
    // return NftModel.find({}, {}, { limit: limit, skip: skip });
    return NftModel.find()
        .limit(limit)
        .skip(skip)
        .sort({ createdAt: "desc" })
        .select("name price cryptoType nftImage.secure_url")
        .lean();
}

export function fetchNftByIdService(nftId: string) {
    return NftModel.findById(nftId);
}

export function fetchUserNftsService(authorId: string, { limit, skip }: { limit: number; skip: number }) {
    // return NftModel.find({ author: authorId }, {}, { limit: limit, skip: skip, sort: { createdAt: "desc" } });

    return NftModel.find({ author: authorId })
        .limit(limit)
        .skip(skip)
        .sort({ createdAt: "desc" })
        .select("name price cryptoType nftImage.secure_url description")
        .lean();
}

export function createNftService(nft: Partial<Nft>) {
    return NftModel.create(nft);
}
