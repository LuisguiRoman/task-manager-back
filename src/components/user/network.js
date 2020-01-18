import { Router } from 'express';
import { response } from '../../network/response';
import { addUser, authenticate } from './controller';
import { checkToken } from '../../middlewares';

export const router = Router();

//Routes
router.post('/', create);
router.post('/login', login);
router.post('/auth', checkToken, auth);

function create(req, res){
    addUser(req.body)
        .then((user)=>{
            response.success(req, res, user, 201);
        })
        .catch((err)=>{
            response.error(req, res, err, 500);
        });
}

function login(req, res) {
    authenticate(req.body)
        .then((token)=>{
            response.success(req, res, { token }, 200);
        })
        .catch((err)=>{
            console.log('Err login: ', err);
            response.error(req, res, 'Usuario o contraseña incorrectas', 400);
        });
}

function auth(req, res) {
    authenticate(req.body)
        .then((token)=>{
            response.success(req, res, { token }, 200);
        })
        .catch((err)=>{
            console.log('Err login: ', err);
            response.error(req, res, 'Usuario o contraseña incorrectas', 400);
        });
}