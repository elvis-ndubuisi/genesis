require("dotenv").config();
import config from "config";
import express from "express";
import helmet from "helmet";
import routes from "./routes";
import logger from "./helpers/logger";

import { connectToMongo } from "./helpers/database";

const app = express();

const PORT = config.get<number>("port");

connectToMongo();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(PORT, () => logger.info(`server started on ${PORT}`));
