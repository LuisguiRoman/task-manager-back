import { Router } from 'express';
import { response } from '../../../network/response';
import { controller } from './index';

export const router = Router();

//Routes
router.get('/:id', get);
router.post('/', upsert);

function get(req, res){
    controller.get(req.params.id)
        .then((user)=>{
            response.success(req, res, user, 200);
        })
        .catch((err)=>{
            response.error(req, res, err, 500);
        });
}

function upsert(req, res){
    controller.upsert(req.body)
        .then((user)=>{
            response.success(req, res, user, 200);
        })
        .catch((err)=>{
            response.error(req, res, err, 500);
        });
}