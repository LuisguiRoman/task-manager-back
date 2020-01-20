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
function list(req, res){
    getTasks(req.decoded.user_id)
        .then((tasks)=>{
            response.success(req, res, {tasks}, 201);
        })
        .catch((err)=>{
            response.error(req, res, err, 500);
        });
}

//Crear una tarea
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

//Actualizar una tarea
function update(req, res) {
    updateTask(req.body, req.decoded.user_id)
        .then((task)=>{
            response.success(req, res, { task }, 200);
        })
        .catch((err)=>{
            response.error(req, res, err, 500);
        });
}

//Eliminar tarea
function remove(req, res) {
    deleteTask(req.body, req.decoded.user_id)
        .then((data)=>{
            response.success(req, res, { data: "Tarea Eliminada" }, 200);
        })
        .catch((err)=>{
            response.error(req, res, err, 500);
        });
}
