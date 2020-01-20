import { Router } from 'express';
import { response } from '../../network/response';
import { getTasks, createTask, updateTask, deleteTask } from './controller';
import { tokenVerification } from '../../middlewares';

export const router = Router();

//Routes
router.post('/', tokenVerification, list);
router.post('/create', tokenVerification, create);
router.patch('/update', tokenVerification, update);
router.delete('/remove', tokenVerification, remove);

//Listar tareas por por usuario
function list(req, res, next){
    getTasks(req.decoded.user_id)
        .then((tasks)=>{
            response.success(req, res, {tasks}, 201);
        })
        .catch(next);
}

//Crear una tarea
function create(req, res, next) {
    createTask(req.body, req.decoded.user_id)
        .then((task)=>{
            response.success(req, res, task, 201);
        })
        .catch(next);
}

//Actualizar una tarea
function update(req, res, next) {
    updateTask(req.body, req.decoded.user_id)
        .then((task)=>{
            response.success(req, res, { task }, 200);
        })
        .catch(next);
}

//Eliminar tarea
function remove(req, res, next) {
    deleteTask(req.body, req.decoded.user_id)
        .then((data)=>{
            response.success(req, res, { data: "Tarea Eliminada" }, 200);
        })
        .catch(next);
}
