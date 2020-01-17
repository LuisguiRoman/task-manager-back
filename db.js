import db from 'mongoose';
db.Promise = global.Promise;

export const connect = async (url) =>{
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}