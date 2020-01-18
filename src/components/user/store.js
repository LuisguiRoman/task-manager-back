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