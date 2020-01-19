import { Schema, model } from 'mongoose';

//Campos requeridos, password no retorna en el response
const userSchema = new Schema({
    name: { type: String, required: true },
    hash: { type: String, required: true },
    password: { type: String, required: true, select: false },
    username: { type: String, required: true, index: { unique: true }},
    created_date: { type: Date, default: Date.now }
});

//eliminar el password de las respuestas
userSchema.methods.toJSON = function() {
    let obj = this.toObject();
    delete obj.password;
    return obj;
}

export const Model = model('User', userSchema);