import express from 'express';
import { getUsers, createUser, getUser, updateUser, deleteUser } from '../controllers/users.js'


const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:userId', getUser);
router.patch('/:userId', updateUser);
router.delete('/:userId', deleteUser);

export default router;