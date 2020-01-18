import { Router } from 'express';
import { response } from '../../network/response';
import { addUser } from './controller';

export const router = Router();

//Routes
router.post('/', create);

async function create(req, res){
    addUser(req.body)
        .then((user)=>{
            response.success(req, res, user, 201);
        })
        .catch((err)=>{
            response.error(req, res, err, 500);
        });
}