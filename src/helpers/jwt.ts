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
    keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey" | "jwtAccessSecret" | "jwtRefreshSecret",
    options?: jwt.SignOptions
) {
    if (keyName === "jwtAccessSecret" || keyName === "jwtRefreshSecret")
        return jwt.sign(payload, config.get(keyName), { ...(options && options) });

    const privateKey = config.get<string>(keyName);
    return jwt.sign(payload, privateKey, { algorithm: "RS256", ...(options && options) });
}

/**
 * Verify signed token.
 * @param token signed token to verity.
 * @param keyName sign for public access or refresh token.
 * @returns decoded object or null if verification fails.
 */
export function verifyJwt<T>(
    token: string,
    keyName: "accessTokenPublicKey" | "refreshTokenPublicKey" | "jwtRefreshSecret" | "jwtAccessSecret"
): T | null {
    const publicKey = config.get<string>(keyName);

    // const publicKey = Buffer.from(config.get<string>(keyname), "base64").toString("ascii");

    try {
        const decoded = jwt.verify(token, publicKey) as T;
        return decoded;
    } catch (error) {
        return null;
    }
}
