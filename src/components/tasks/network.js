import { Router } from 'express';
import { response } from '../../network/response';
import { addUser, authenticate, getUser } from './controller';
import { tokenVerification } from '../../middlewares';

export const router = Router();

//Routes
router.post('/', tokenVerification, list);
router.post('/create', tokenVerification, create);
router.post('/update', tokenVerification, update);

//Crear un usuario
function list(req, res){
    addUser(req.body)
        .then((user)=>{
            response.success(req, res, user, 201);
        })
        .catch((err)=>{
            response.error(req, res, err, 500);
        });
}

//Loguear un usuario
function create(req, res) {
    authenticate(req.body)
        .then((token)=>{
            response.success(req, res, { token }, 200);
        })
        .catch((err)=>{
            response.error(req, res, 'Usuario o contraseña incorrectas', 400);
        });
}

//Crear una sesion de usuario
function update(req, res) {
    getUser(req.decoded.user_id)
        .then((user)=>{
            console.log(user);
            response.success(req, res, {user: {name: user.name}}, 200);
        })
        .catch((err)=>{
            response.error(req, res, 'Internal server error', 500);
        });
}