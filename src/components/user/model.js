import { Schema, model } from 'mongoose';

//Campos requeridos, password no retorna en el response
const userSchema = new Schema({
    name: { type: String, required: true },
    hash: { type: String, required: true },
    username: { type: String, required: true, index: { unique: true }},
    created_date: { type: Date, default: Date.now }
});

export const Model = model('User', userSchema);