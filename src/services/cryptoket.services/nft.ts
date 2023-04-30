import { DocumentType } from "@typegoose/typegoose";
import { Nft, NftModel, nftPrivateFields } from "../../models/cryptoket.models";

export function fetchNftsService() {
    // TODO: paginate this
    return NftModel.find();
}

export function fetchNftByIdService(nftId: string) {
    return NftModel.findById(nftId);
}

export function fetchUserNftsService(authorId: string) {
    // TODO: paginate this
    return NftModel.find({ author: authorId });
}

export function createNftService(nft: Partial<Nft>) {
    return NftModel.create(nft);
}
