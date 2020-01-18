import { Router } from 'express';
import { response } from '../../network/response';
import { addUser, authenticate, getUser } from './controller';
import { checkToken } from '../../middlewares';

export const router = Router();

//Routes
router.post('/', create);
router.post('/login', login);
router.post('/session', checkToken, session);

//Crear un usuario
function create(req, res){
    addUser(req.body)
        .then((user)=>{
            response.success(req, res, user, 201);
        })
        .catch((err)=>{
            response.error(req, res, err, 500);
        });
}

//Loguear un usuario
function login(req, res) {
    authenticate(req.body)
        .then((token)=>{
            response.success(req, res, { token }, 200);
        })
        .catch((err)=>{
            response.error(req, res, 'Usuario o contraseña incorrectas', 400);
        });
}

//Crear una sesion de usuario
function session(req, res) {
    getUser(req.decoded.user_id)
        .then((user)=>{
            console.log(user);
            response.success(req, res, {user}, 200);
        })
        .catch((err)=>{
            response.error(req, res, 'Internal server error', 500);
        });
}