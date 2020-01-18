import { Schema, model } from 'mongoose';

//Campos requeridos, password no retorna en el response
const mySchema = new Schema({
    name: String,
    password: { type: String, required: true, select: false },
    username: { type: String, required: true, index: { unique: true }}
});

export const Model = model('user', mySchema);