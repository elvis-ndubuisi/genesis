import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../helpers/jwt";
import lodash from "lodash";

/**
 * Verifies incoming jwt tokens from cookie or authentication header
 * attach verified token (i.e user) to res.locals
 */
const deserializeCryptoUser = (req: Request, res: Response, next: NextFunction) => {
    const accessToken = lodash.get(req.cookies, "a-tk") || (req.headers.authorization || "").replace(/^Bearer\s/, "");

    if (!accessToken) return next();

    const decoded = verifyJwt(accessToken, "jwtAccessSecret");
    if (decoded) {
        res.locals.user = decoded;
    }

    return next();
};

export default deserializeCryptoUser;
