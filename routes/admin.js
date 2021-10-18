import { Router } from "express";
import express from "express";


const router = Router();

/* Routes for Login */
import adminControl from '../controllers/AdminController';
router.post('/login', adminControl.getLogin);

// router.post('/login', async (req, res) => {
//     res.send('login')
// })

export default router;