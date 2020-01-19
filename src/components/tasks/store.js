import { Model } from './model';

//Crear un nuevo usuario
export function add(task){
    const newTask = new Model(task);
    return newTask.save();
}

//Traer las tareas filtradas por el id de usuario
export function get(user_id){
    return new Promise((resolve, reject)=>{
        Model.find({user_id})
            .populate()
            .exec((err, populated)=>{
                if(err){
                    reject(err);
                    return false;
                }else{
                    resolve(populated);
                }
            });
    });
}