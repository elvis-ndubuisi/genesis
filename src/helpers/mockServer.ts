require("dotenv").config();
import config from "config";
import express, { Application } from "express";
import helmet from "helmet";
import routes from "../routes";
import logger from "../helpers/logger";

import { connectToMongo } from "../helpers/database";

export const app: Application = express();

const PORT = config.get<number>("port");

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

export default app;
