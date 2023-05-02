import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../helpers/jwt";
import lodash from "lodash";

/**
 * Verifies incoming jwt tokens from cookie or authentication header
 * attach verified token (i.e user) to res.locals
 */
const deserializeUser = (req: Request, res: Response, next: NextFunction) => {
    const accesstoken = lodash.get(req.cookies, "a-tk") || (req.headers.authorization || "").replace(/^Bearer\s/, "");

    if (!accesstoken) return next();

    const decoded = verifyJwt(accesstoken, "jwtRefreshSecret");
};

export default deserializeUser;

// import { Request, Response, NextFunction } from "express";

// const fetchUser = (req: Request, res: Response, next: NextFunction) => {
//     const user = res.locals.user;

//     if (!user) {
//         return res.sendStatus(403);
//     }

//     return next();
// };

// export default fetchUser;
