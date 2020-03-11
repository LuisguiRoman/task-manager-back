import { add, get, update, remove } from './store';
import { error } from '../../utils/error';

//Agregar una tarea con el id del usuario
export const createTask = ({task_name, expiration_date, priority}, token_id) =>{
    if(!task_name || !expiration_date || !priority){
        throw error('Debes completar la información', 403);
    }
    const task = { task_name, user_id: token_id, expiration_date, priority };
    return add(task);
}

//Listar tareas por usuario
export const getTasks = (user_id) =>{
    return get(user_id);
}

//Agregar una tarea con el id del usuario
export const updateTask = ({task_id, priority, user_id}, user_id_token) =>{
    if(!task_id || !priority || !user_id){
        throw error('Debes completar la información', 403);
    }
    if(user_id !== user_id_token){
        throw error('No puedes editar esta tarea', 401);
    }
    return update(task_id, priority);
}

//eliminar tarea
export const deleteTask = ({task_id, user_id}, user_id_token) =>{
    if(!task_id || !user_id){
        throw error('Debes completar la información', 403);
    }
    if(user_id !== user_id_token){
        throw error('No puedes editar esta tarea', 401);
    }
    return remove(task_id);
}