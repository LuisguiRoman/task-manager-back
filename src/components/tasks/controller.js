import { add, get } from './store';

//Agregar una tarea con el id del usuario
export function createTask({task_name, user_id, expiration_date, priority}, token_id){
    
    console.log(task_name, user_id, expiration_date, priority);

    if(!task_name || !user_id || !expiration_date || !priority){
        throw new Error('Debes completar la información');
    }
    const task = { task_name, user_id, expiration_date, priority };
    return add(task);
}

//Listar tareas por usuario
export function getTasks(user_id){
    return get(user_id);
}