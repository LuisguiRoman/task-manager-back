import { add } from './store';

export function addUser ({name, username, password}){
    if(!name || !username || !password){
        return Promise.reject('Información inválida');
    }
    const user = { name, username, password };
    return add(user);
}