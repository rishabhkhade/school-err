import { Router } from "express";
import express from "express";


const router = Router();
const admRtr = express.Router();

/* Routes for Login */
import adminControl from '../controllers/AdminController';
admRtr.route('/login').post(adminControl.getLogin);



export default router;