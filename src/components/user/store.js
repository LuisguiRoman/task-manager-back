import { Model } from './model';

//Crear un nuevo usuario
export const add = (user) =>{
    const newUser = new Model(user);
    return newUser.save();
}

//Buscar el usuario registrado
export const auth = async (username) =>{
    const user = await Model.findOne({username});
    return user;
}

//Buscar un usuario por su id
export const get = async (id) =>{
    const user = await Model.findById(id);
    return user;
}