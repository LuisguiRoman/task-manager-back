import { Model } from './model';

//Crear un nuevo usuario
export function add(user){
    const newUser = new Model(user);
    return newUser.save();
}

//Buscar el usuario registrado
export async function auth(username){
    const user = await Model.findOne({username});
    return user;
}

//Buscar un usuario por su id
export function get(_id){
    return new Promise((resolve, reject)=>{
        //Buscar un unico usuario
        Model.findOne({_id})
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