import mongoose from "mongoose";
import config from "config";

import logger from "./logger";

async function connectToMongo() {
    try {
        const conn = await mongoose.connect(config.get<string>("mongoDb.Uri"), {
            dbName: config.get<string>("mongoDb.Name"),
        });
        logger.info(`Connected: Mongo-Data-Source on: ${conn.connection.id}`);
    } catch (error: any) {
        logger.error(error?.message);
        process.exit(1);
    }

    mongoose.connection.on("disconnected", () => {
        logger.info("Disconnected from Mongo-Data-Source");
    });
}

function connectToRedis() {}

function connectToPostgres() {}

export { connectToMongo, connectToPostgres, connectToRedis };
