import { config } from '../config';
import { router as user } from '../components/user/network';

export const routes = (server)=>{
    server.use(`${config.api.root}/user`, user);
}