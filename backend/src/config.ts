import 'dotenv/config';
import { IConnectionParameters, Client } from 'pg-promise/typescript/pg-subset';

const config: IConnectionParameters = {
    host: process.env.DB_HOST ?? "",
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER ?? "",
    password: process.env.DB_PASSWORD ?? "",
    database: process.env.DB_NAME ?? "",
}

export const dbConfig = new Client(config);