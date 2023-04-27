import express, { Response, Request, NextFunction } from "express";

import salesRoutes from "./salesprit.routes";
import cryptoRoutes from "./cryptpket.routes";

const router = express.Router();

router.use(salesRoutes);
router.use("/cryptoket", cryptoRoutes);
router.get("/alive", (_, res: Response) => res.sendStatus(200));

router.get("*", (_, res: Response, next: NextFunction) => {
    next(res.status(400).send("resource not found"));
});

export default router;
