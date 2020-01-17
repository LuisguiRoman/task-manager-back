import express from 'express';
import bodyParser from 'body-parser';
import cors from'cors';
import { config } from '../config';
import { routes } from '../network/routes';
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

//endpoints
routes(app);

app.listen(config.api.port, ()=>{
    console.log(`Api escuchando en el puerto ${config.api.port}`);
});