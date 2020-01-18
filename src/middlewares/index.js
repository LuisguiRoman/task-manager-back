import jwt from 'jsonwebtoken';
import { config } from '../config';


export const checkToken = (req, res, next)=>{
    if(!req.headers.authorization) {//si no hay token
        return res.error(req, res, 'No tienes permisos necesarios', 401);
    }else{
        const token = req.headers.authorization.split(' ')[1];

        jwt.verify(token, config.auth.secret, (err, decoded) => {
            if (err) {
                return res.error(req, res, 'Token inválido', 403);
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }
  }