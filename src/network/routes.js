import { config } from '../config';
import { router as user } from '../components/user/network';
import { router as tasks } from '../components/tasks/network';

export const routes = (server)=>{
    server.use(`${config.api.root}/user`, user);
    server.use(`${config.api.root}/tasks`, tasks);
}