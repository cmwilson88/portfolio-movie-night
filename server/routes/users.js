import express from 'express';
import { createNewUser, checkIfUserExists } from '../controllers/usersCtrl';

const router = express.Router();

// sign up
router.post('/', createNewUser);

// Check if user exists
router.get('/:identifier', checkIfUserExists)

export default router;