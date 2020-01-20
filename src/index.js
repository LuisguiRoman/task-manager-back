import express from 'express';
import bodyParser from 'body-parser';
import cors from'cors';
import { routes } from './network/routes';
import { config } from './config';
import { dbConnect } from './db';
import { errors } from './network/errors';

const app = express();

dbConnect(config.db.dbUrl);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//response de errores
app.use(errors);

//endpoints
routes(app);

app.listen(config.api.port, ()=>{
    console.log(`Api escuchando en el puerto ${config.api.port}`);
});