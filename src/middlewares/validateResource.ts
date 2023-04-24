import { Response, Request, NextFunction } from "express";
import { AnyZodObject } from "zod";

import logger from "../helpers/logger";

/**
 * Validates incoming requests against a schema (zod schema object)
 * @param schema Zod schema object to use for validation
 * @returns An error object if validation fails or proceed to next middleware.
 */
const validateResource = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({ body: req.body, params: req.params, query: req.query });
        next();
    } catch (error: any) {
        logger.debug(error?.message);
        return res.status(400).send(error?.message);
    }
};

export default validateResource;
