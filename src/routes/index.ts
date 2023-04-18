import express, { Response, Request, NextFunction } from "express";

const router = express.Router();

router.get("/alive", (_, res: Response) => res.sendStatus(200));

router.get("*", (_, res: Response, next: NextFunction) => {
    next(res.status(400).send("resource not found"));
});

export default router;
