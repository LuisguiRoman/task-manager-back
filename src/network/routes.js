import { router as user } from '../components/user/network';
import { config } from '../config';

export const routes = (server)=>{
    server.use(`${config.api.root}/user`, user);
}