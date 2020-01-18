import dotenv from 'dotenv';
dotenv.config();

export const config = {
    api: {
        port: process.env.PORT || 3002,
        root: process.env.ROOT || '/api',
    },
    db: {
        dbUrl: process.env.DB_URL || ''
    }
}
