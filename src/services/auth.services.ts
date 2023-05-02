import { signJwt } from "../helpers/jwt";
import config from "config";
import lodash from "lodash";
import { DocumentType } from "@typegoose/typegoose";
import { User, privateFields } from "../models/cryptoket.models";

export function signCryptoAccessTokenService(user: DocumentType<User>) {
    const payload = lodash.omit(user.toJSON(), privateFields);

    const accessToken = signJwt(payload, "jwtAccessSecret", {
        expiresIn: config.get<string>("accessTokenExp"),
        issuer: "genesis",
        audience: `${user._id}`,
    });
    return accessToken;
}

export function signCryptoRefreshTokenService({ userId, session }: { userId: string; session?: boolean }) {
    if (!session) {
        const refreshToken = signJwt({ userId: userId }, "jwtRefreshSecret", {
            expiresIn: config.get<string>("refreshTokenExp"),
            issuer: "genesis",
            audience: `${userId}`,
        });
        return refreshToken;
    }
}

export function signRefreshTokenService() {}
