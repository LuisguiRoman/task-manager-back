import mongoose from 'mongoose';
import { config } from './config';

mongoose.Promise = global.Promise;

const { db: { user,pass,name,port,server } } = config;

export const dbConnect = async () =>{
    await mongoose.connect(
        `${port}${user}:${pass}${server}${name}`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          user,
          pass,
          dbName: name,
        }
    );
}