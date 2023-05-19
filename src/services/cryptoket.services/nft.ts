import { Nft, NftModel } from "../../models/cryptoket.models";

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
    return NftModel.findById(nftId).populate("author", "username");
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

export function createNftService(nft: Partial<Nft>, authorId: string) {
    return NftModel.create({ ...nft, author: authorId });
}

export function findNftByName(name: string) {
    return NftModel.findOne({ name: name.trim().toLowerCase() });
}
