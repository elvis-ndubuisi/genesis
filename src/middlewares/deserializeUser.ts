import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../helpers/jwt";
import lodash from "lodash";

/**
 * Verifies incoming jwt tokens from cookie or authentication header
 * attach verified token (i.e user) to res.locals
 */
const deserializeUser = (req: Request, res: Response, next: NextFunction) => {
    const accessToken = lodash.get(req.cookies, "access-token");

    if (!accessToken) return res.sendStatus(403);

    const decoded = verifyJwt(accessToken, "refreshTokenPublicKey");
    if (decoded) {
        res.locals.user = decoded;
    }
    return next();
};

export default deserializeUser;
