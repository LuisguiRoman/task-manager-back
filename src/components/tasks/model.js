import { Schema, model } from 'mongoose';

//Campos requeridos, password no retorna en el response
const taskSchema = new Schema({
    task_name: { type: String, required: true },
    priority: { type: Number, required: true },
    user_id: { type: Schema.ObjectId, required: true, ref: 'User' },
    expiration_date: { type: Date, default: Date.now, required: true },
    created_date: { type: Date, default: Date.now }
});

export const Model = model('Task', taskSchema);