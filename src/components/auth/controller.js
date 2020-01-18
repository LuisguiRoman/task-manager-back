import { add } from './store';

export function createPass({_id}, password) {
    const authData = {
        user_id: _id, password
    };
    return add(authData);
}