
import dotenv from 'dotenv';

import { Config } from "../interfaces/config";

dotenv.config();

if (process.env.DEBUG === 'true') {
    dotenv.config({ path: `.env.dev`, override: true });
}

const config: Config = {
    debug: process.env.DEBUG! === 'true' ? true : false,
    sql_debug: process.env.SQL_DEBUG! === 'true' ? true : false,
    port: parseInt(process.env.PORT!),
    enviroment: process.env.ENVIROMENT!,
    service_db: {
        host: process.env.SERVICE_DB_HOST!,
        database: process.env.SERVICE_DB_DATABASE!,
        user: process.env.SERVICE_DB_USER!,
        password: process.env.SERVICE_DB_PASSWORD!,
        port: parseInt(process.env.SERVICE_DB_PORT!)
    },
    rabbit: {
        host: process.env.RABBIT_HOST!,
        user: process.env.RABBIT_USER!,
        password: process.env.RABBIT_PASSWORD!,
        port: parseInt(process.env.RABBIT_PORT!),
        queue: process.env.RABBIT_QUEUE!,
        reconnection_delay: parseInt(process.env.RABBIT_RECONNECTION_DELAY!)
    },
    redis_queue: {
        host: process.env.REDIS_QUEUE_HOST!,
        port: parseInt(process.env.REDIS_QUEUE_PORT!),
        db: parseInt(process.env.REDIS_QUEUE_DB!)
    },
    discord_url: process.env.DISCORD_URL!,
    elastic: {
        host: process.env.ELASTIC_HOST!,
        prefix: process.env.ELASTIC_HOST_PREFIX!,
        user: process.env.ELASTIC_USER!,
        password: process.env.ELASTIC_PASSWORD!
    }
};

export { config }