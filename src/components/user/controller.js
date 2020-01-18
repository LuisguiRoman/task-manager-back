import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { config } from '../../config';
import { add, auth } from './store';

export function addUser ({name, username, password}){
    if(!name || !username || !password){
        throw new Error('Información inválida');
    }
    //Generar hash para la verificacion de contraseña
    const hash = bcrypt.hashSync(password, 10);
    const user = { name, username, password, hash };
    return add(user);
}

export async function authenticate({ username, password }) {
    if(!username || !password){
        throw new Error('Información inválida');
    }
    const user = await auth(username);

    //Validar la contraseña con el hash generado en el registro
    const validPassword = bcrypt.compareSync(password, user.hash);
    if (!validPassword) {
        throw new Error('Información inválida');
    }else{
        //Generar token con el id de usuario
        const token = jwt.sign({ user_id: user._id }, config.auth.secret, { expiresIn: '24h' });
        return token;
    }
}