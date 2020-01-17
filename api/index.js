import express from 'express';
import bodyParser from 'body-parser';
import cors from'cors';
import { routes } from '../network/routes';
import { config } from '../config';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

//endpoints
routes(app);

app.listen(config.api.port, ()=>{
    console.log(`Api escuchando en el puerto ${config.api.port}`);
});