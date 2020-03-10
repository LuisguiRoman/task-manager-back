import dotenv from 'dotenv';
dotenv.config();

export const config = {
    api: {
        port: process.env.PORT || 3002,
        root: process.env.ROOT || '/api',
    },
    db: {
        user: process.env.DB_USER || '',
        pass: process.env.DB_PASS || '',
        name: process.env.DB_NAME || '',
        port: process.env.DB_PORT || '',
        server: process.env.DB_SERVER || '',
    },
    auth: {
        secret: process.env.SECRET_KEY || '_xxxxx'
    }
}