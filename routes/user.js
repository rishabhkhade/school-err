import { Router } from "express";

const router = Router();
// Auth token Middleware
import admathtkn from '../middleware/adminAuthToken'; 

/* Routes for Login */
// import userControl from '../controllers/UserController';
// router.route('/login').get(userControl.getLogin);

/* Routes for user */
import userControl from '../controllers/UserController';
router.route('/users').get(admathtkn,userControl.getUsers);
router.route('/user-add').post(admathtkn,userControl.addUser);
router.route('/user-get/:id').get(admathtkn,userControl.getUser);
router.route('/user-update/:id').put(admathtkn,userControl.updateUser);
router.route('/user-delete/:id').delete(admathtkn,userControl.deleteUser);

export default router;
