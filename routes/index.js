import { Router } from "express";
// import user from "../validation/user";

import admin from './admin';
import userr from './user';

const routes = Router();

routes.use('/admin', admin);
routes.use('/user', userr);

// routes.get('/', async (req, res) => {
//     res.send('hello');
// })

export default routes;