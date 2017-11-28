import express from 'express';
import { login } from '../controllers/authCtrl';

const router = express.Router();

router.post('/', login)

export default router;