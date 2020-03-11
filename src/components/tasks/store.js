import { Model } from './model';

//Crear un nuevo usuario
export const add = (task) =>{
    const newTask = new Model(task);
    return newTask.save();
}

//Traer las tareas filtradas por el id de usuario
export const get = (user_id) =>{
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

export const update = async (task_id, priority) =>{
    //buscar en la db el mensaje por el id
    const findTask = await Model.findOne({
        _id: task_id
    });

    findTask.priority = priority;
    const newTaskInfo = await findTask.save();
    return newTaskInfo;
}

export const remove = (task_id) =>{
    return Model.deleteOne({
        _id: task_id
    });
}