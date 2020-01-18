import { Model } from './model';
import { createPass } from '../auth/controller';

export async function add (user){
    const newUser = new Model(user);

    //Guardar contraseña
    await createPass(newUser, user.password);
    return newUser.save();
}