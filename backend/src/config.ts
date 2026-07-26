import 'dotenv/config';

export const config = {
    url: process.env.DB_URL ?? "",
    port: Number(process.env.PORT),
    user: process.env.DB_USER ?? "",
    password: process.env.DB_PASSWORD ?? "",
    database: process.env.DB_NAME ?? "",
    secretKey: process.env.JWT_SECRET ?? ""
}