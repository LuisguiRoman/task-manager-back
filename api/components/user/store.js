import { Model } from './model';

export function add (user){
    const newUser = new Model(user);
    return newUser.save();
}