import { Request, Response } from "express";
import config from "config";
import lodash from "lodash";
import logger from "../../helpers/logger";
import { verifyJwt } from "../../helpers/jwt";
import { LoginUserInput, RegisterUserInput, EditUserProfileInput } from "../../schemas/salesprit.schemas";
import {
    createUserService,
    findUserByEmailService,
    findUserByIdService,
    updateUserService,
} from "../../services/salesprit.services";

export async function registerUserHandler(req: Request<{}, {}, RegisterUserInput>, res: Response) {
    const payload = {
        firstname: "fnUser",
        lastname: "lnUser",
        password: req.body.password,
        email: req.body.email,
    };

    try {
        const user = await createUserService(payload);
        // TODO: sign cookens
        let refreshToken = "";
        let accessToken = "";

        // Set cookies
        res.cookie("access-token", accessToken, {
            maxAge: 900000, // TODO: change to match config TTL // 15min
            httpOnly: true,
            domain: config.get<string>("cookieOpt.domain.salesprit"),
            path: "/",
            sameSite: "strict",
            secure: config.get<boolean>("cookieOpt.secure"),
        });
        res.cookie("refresh-token", refreshToken, {
            maxAge: 3.154e10, // TODO: change to match config TTL // 1yr
            httpOnly: true,
            domain: config.get<string>("cookieOpt.domain.salesprit"),
            path: "/",
            sameSite: "strict",
            secure: config.get<boolean>("cookieOpt.secure"),
        });
        res.status(201).json({ message: "User created", accessToken, refreshToken });
    } catch (error: any) {
        logger.error(error);
        if (error.code === 11000) {
            return res.status(409).send("Account already exists");
        }
        res.sendStatus(500);
    }
}

export async function loginUserHandler(req: Request<{}, {}, LoginUserInput>, res: Response) {
    const { email, password } = req.body;
    try {
        const user = await findUserByEmailService(email);
        if (!user) return res.status(401).send("email or password is incorrect");

        const isValidPassword = await user.comparePassword(password);
        if (!isValidPassword) return res.status(401).send("email or password is incorrect");

        // TODO: sign cookens
        let refreshToken = "";
        let accessToken = "";

        // Set cookies
        res.cookie("access-token", accessToken, {
            maxAge: 900000, // TODO: change to match config TTL // 15min
            httpOnly: true,
            domain: config.get<string>("cookieOpt.domain.salesprit"),
            path: "/",
            sameSite: "strict",
            secure: config.get<boolean>("cookieOpt.secure"),
        });
        res.cookie("refresh-token", refreshToken, {
            maxAge: 3.154e10, // TODO: change to match config TTL // 1yr
            httpOnly: true,
            domain: config.get<string>("cookieOpt.domain.salesprit"),
            path: "/",
            sameSite: "strict",
            secure: config.get<boolean>("cookieOpt.secure"),
        });
        res.status(200).json({ accessToken, refreshToken });
    } catch (error) {
        logger.error(error);
        res.sendStatus(500);
    }
}

export async function editUserProfileHandler(req: Request<{}, {}, EditUserProfileInput>, res: Response) {
    try {
        const data = await updateUserService({ payload: req.body, userId: res.locals._id });
        res.send("updated with status");
    } catch (error: any) {
        logger.error(error);
        res.status(500).send(error?.message);
    }
}

export async function refreshAccessTokenHandler(req: Request, res: Response) {
    const refreshToken = lodash.get(req.cookies, "refresh-token");

    const decoded = verifyJwt<{ session: string }>(refreshToken, "refreshTokenPublicKey");

    if (!decoded) {
        return res.status(401).send("Could not refresh access token");
    }

    const user = await findUserByIdService("user id goes here");

    if (!user) {
        return res.status(401).send("Couldn't refresh access token");
    }

    // const accessToken = signAccessTokenService(admin);
    const accessToken = "";
    // Set Cookies
    // res.cookie("access-token", accessToken, {
    //     maxAge: 900000, // 15mins
    //     httpOnly: true,
    //     domain: config.get<string>("host"),
    //     // domain: 'localhost', // Only use in development
    //     path: "/",
    //     sameSite: "strict",
    //     secure: config.get<boolean>("secure_cookie"),
    // });
    return res.status(200).send({ accessToken });
}
