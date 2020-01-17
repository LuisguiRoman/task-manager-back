import { Schema, model } from 'mongoose';

//Campos requeridos, password no retorna en el response
const mySchema = new Schema({
    name: String,
    username: { type: String, required: true, index: { unique: true }},
    password: { type: String, required: true, select: false }
});

export const model = model('user', mySchema);