import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { config } from '../../config';
import { add, auth, get } from './store';

//Agregar un usuario a la base de datos
export const addUser = ({name, username, password}) =>{
    if(!name || !username || !password){
        throw error('Información inválida', 403);
    }
    //Generar hash para la verificacion de contraseña
    const hash = bcrypt.hashSync(password, 10);
    const user = { name, username, hash };
    return add(user);
}

//Verificar el usuario y la contrasela en la base de datos
export const authenticate = async ({ username, password }) =>{
    if(!username || !password){
        throw error('Información inválida', 403);
    }
    const user = await auth(username);

    //Validar la contraseña con el hash generado en el registro
    const validPassword = bcrypt.compareSync(password, user.hash);
    if (!validPassword) {
        throw error('Información inválida', 403);
    }else{
        //Generar token con el id de usuario
        const token = jwt.sign({ user_id: user._id }, config.auth.secret, { expiresIn: '24h' });
        return token;
    }
}

//Traer datos de un usuario
export const getUser = (id) =>{
    return get(id);
}