import express from 'express';
import { getUsers, createUser } from '../controllers/users.js'
import User from '../models/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);

export default router;