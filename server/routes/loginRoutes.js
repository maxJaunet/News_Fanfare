import express from 'express';
import { checkLogIn, getLogInPage } from '../controllers/logIn.js';

const router = express.Router();

router.get('/', getLogInPage);
router.post('/', checkLogIn)


export default router;