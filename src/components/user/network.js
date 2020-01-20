import { Router } from 'express';
import { response } from '../../network/response';
import { addUser, authenticate, getUser } from './controller';
import { tokenVerification } from '../../middlewares';

export const router = Router();

//Routes
router.post('/create', create);
router.post('/login', login);
router.post('/session', tokenVerification, session);

//Crear un usuario
function create(req, res, next){
    addUser(req.body)
        .then((user)=>{
            response.success(req, res, user, 201);
        })
        .catch(next);
}

//Loguear un usuario
function login(req, res, next) {
    authenticate(req.body)
        .then((token)=>{
            response.success(req, res, { token }, 200);
        })
        .catch(next);
}

//Crear una sesion de usuario
function session(req, res, next) {
    getUser(req.decoded.user_id)
        .then((user)=>{
            response.success(req, res, {user: {name: user.name}}, 200);
        })
        .catch(next);
}