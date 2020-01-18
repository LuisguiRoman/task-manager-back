import jwt from 'jsonwebtoken';
import { config } from '../config';
import { response } from '../network/response';


export const tokenVerification = (req, res, next)=>{
    if(!req.headers.authorization) {//si no hay token
        return response.error(req, res, 'No tienes permisos necesarios', 401);
    }else{
        const token = req.headers.authorization.split(' ')[1];

        jwt.verify(token, config.auth.secret, (err, decoded) => {
            if (err) {
                return response.error(req, res, 'Token inválido', 403);
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }
  }