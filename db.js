import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

export const dbConnect = async (url) =>{
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
}