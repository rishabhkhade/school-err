import { Router } from "express";

const router = Router();
// Auth token Middleware
// import admathtkn from '../middleware/adminAuthToken'; 

/* Routes for user */
import userControl from '../controllers/UserController';
router.route('/users').get(userControl.getUsers);
router.route('/user-add').post(userControl.addUser);
router.route('/user-get/:id').get(userControl.getUser);
router.route('/user-update/:id').put(userControl.updateUser);
router.route('/user-delete/:id').delete(userControl.deleteUser);

export default router;
