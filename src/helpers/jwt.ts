import config from "config";
import jwt from "jsonwebtoken";

/**
 * Generate a signed token from payload object.
 * @param payload object to be signed.
 * @param keyName sign for private access or refresh token.
 * @param options jwt.SignOptions.
 * @returns signed jwt object.
 */
export function signJwt(
    payload: Object,
    keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
    options?: jwt.SignOptions
) {
    const privateKey = config.get<string>(keyName);
    return jwt.sign(payload, privateKey, { algorithm: "RS256", ...(options && options) });
}

/**
 * Verify signed token.
 * @param token signed token to verity.
 * @param keyName sign for public access or refresh token.
 * @returns decoded object or null if verification fails.
 */
export function verifyJwt(token: string, keyName: "accessTokenPublicKey" | "refreshTokenPublicKey") {
    const publicKey = config.get<string>(keyName);

    try {
        const decoded = jwt.verify(token, publicKey);
        return decoded;
    } catch (error) {
        return null;
    }
}
