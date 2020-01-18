import { add } from './store';

export function addUser ({name, username, password}){
    if(!name){
        return Promise.reject('Invalid name');
    }
    const user = { name, username, password };
    console.log(add)
    return add(user);
}