import { Router } from 'express';
import { response } from '../../network/response';
import { getTasks, createTask, updateTask } from './controller';
import { tokenVerification } from '../../middlewares';

export const router = Router();

//Routes
router.post('/', tokenVerification, list);
router.post('/create', tokenVerification, create);
router.post('/update', tokenVerification, update);

//Crear un usuario
function list(req, res){
    getTasks(req.decoded.user_id)
        .then((tasks)=>{
            response.success(req, res, {tasks}, 201);
        })
        .catch((err)=>{
            response.error(req, res, err, 500);
        });
}

//Loguear un usuario
function create(req, res) {
    createTask(req.body, req.decoded.user_id)
        .then((task)=>{
            response.success(req, res, task, 201);
        })
        .catch((err)=>{
            //console.log(err)
            response.error(req, res, 'Server error', 500);
        });
}

//Crear una sesion de usuario
function update(req, res) {
    updateTask(req.decoded.user_id)
        .then((user)=>{
            response.success(req, res, {user: {name: user.name}}, 200);
        })
        .catch((err)=>{
            response.error(req, res, err, 500);
        });
}