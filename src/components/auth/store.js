import { Model } from './model';

export function add(auth){
    const newAuth = new Model(auth);
    return newAuth.save();
}