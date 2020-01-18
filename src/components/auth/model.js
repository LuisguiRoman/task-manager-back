import { Schema, model } from 'mongoose';

//password no retorna en el response
const mySchema = new Schema({
    user_id: { type: String, required: true, index: { unique: true }},
    password: { type: String, required: true, select: false }
});

export const Model = model('auth', mySchema);