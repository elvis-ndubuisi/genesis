import { Request, Response } from "express";
import logger from "../../helpers/logger";
import { LoginUserInput, RefreshTokenInput, FetchUserNftsInput } from "../../schemas/cryptoket.schemas";
import {
    createUserService,
    findUserByNameService,
    findUserByIdService,
    fetchUserNftsService,
} from "../../services/cryptoket.services";
import { signCryptoAccessTokenService, signCryptoRefreshTokenService } from "../../services/auth.services";
import { verifyJwt } from "../../helpers/jwt";

export async function userRegisterHandler(req: Request<{}, {}, LoginUserInput>, res: Response) {
    try {
        await createUserService(req.body);
        res.status(201).send("You successfully registered");
    } catch (error: any) {
        if (error?.code === 11000) {
            return res.status(409).send("Account already exists");
        }

        res.status(500).send(error?.message);
    }
}

export async function userLoginHandler(req: Request<{}, {}, LoginUserInput>, res: Response) {
    const { username, password } = req.body;
    try {
        const user = await findUserByNameService(username);

        if (!user) return res.status(401).send("Invalid username or password");

        const isValid = await user.checkPassword(password);
        if (!isValid) return res.status(401).send("Invalid username or password");

        // Sign tokens
        const accessToken = signCryptoAccessTokenService(user);
        const refreshToken = signCryptoRefreshTokenService({ userId: user.id, session: false });
        res.status(200).json({ accessToken, refreshToken });
    } catch (error: any) {
        logger.error(error);
        res.status(500).send("Something went wrong");
    }
}

export async function userRefreshTokenHandler(req: Request<{}, {}, RefreshTokenInput>, res: Response) {
    const refreshToken = req.body.refreshToken;

    const decoded = verifyJwt<{ userId: string }>(refreshToken, "jwtRefreshSecret");

    if (!decoded) return res.status(401).send("Could not refresh token");

    const user = await findUserByIdService(decoded.userId);

    if (!user) return res.status(401).send("Could not refresh token");

    const accessToken = signCryptoAccessTokenService(user);
    res.status(200).json({ accessToken });
}

export async function userNftsHandler(
    req: Request<FetchUserNftsInput["params"], {}, {}, FetchUserNftsInput["query"]>,
    res: Response
) {
    const page = parseInt(req.query.page) === 0 ? 1 : parseInt(req.query.page);
    const size = req.query.size ? parseInt(req.query.size) : 4;

    const limit = size;
    const skip = (page - 1) * size; /* Number to document to skip */

    try {
        const nfts = await fetchUserNftsService(req.params.userId, { limit: limit, skip: skip });
        res.status(200).send(nfts);
    } catch (error) {
        logger.error(error);
        res.sendStatus(500);
    }
}
