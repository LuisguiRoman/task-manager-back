import { add, get, update, remove } from './store';

//Agregar una tarea con el id del usuario
export function createTask({task_name, expiration_date, priority}, token_id){
    if(!task_name || !expiration_date || !priority){
        throw new Error('Debes completar la información');
    }
    const task = { task_name, user_id: token_id, expiration_date, priority };
    return add(task);
}

//Listar tareas por usuario
export function getTasks(user_id){
    return get(user_id);
}

//Agregar una tarea con el id del usuario
export function updateTask({task_id, priority, user_id}, user_id_token){
    if(!task_id || !priority || !user_id){
        throw new Error('Debes completar la información');
    }
    if(user_id !== user_id_token){
        throw new Error('No puedes editar esta tarea');
    }
    return update(task_id, priority);
}

//eliminar tarea
export function deleteTask({task_id, user_id}, user_id_token){
    if(!task_id || !user_id){
        throw new Error('Debes completar la información');
    }
    if(user_id !== user_id_token){
        throw new Error('No puedes editar esta tarea');
    }
    return remove(task_id);
}