import express from 'express';
import { createNewUser } from '../controllers/usersCtrl';

const router = express.Router();

router.post('/', createNewUser);

export default router;