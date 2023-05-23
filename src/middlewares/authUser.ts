import { Request, Response, NextFunction } from "express";

const authUser = (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    if (!user) {
        return res.sendStatus(401);
    }

    return next();
};

export default authUser;
