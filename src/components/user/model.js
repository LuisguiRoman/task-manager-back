import { Schema, model } from 'mongoose';

//Campos requeridos, password no retorna en el response
const mySchema = new Schema({
    name: String,
    username: { type: String, required: true, index: { unique: true }}
});

export const Model = model('user', mySchema);