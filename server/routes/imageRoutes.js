import express from 'express';
import { getImages, postImage } from '../controllers/images.js';
import { upload } from '../uploads/uploads.js';
import multer from 'multer';


const router = express.Router();



router.get('/', getImages);
router.post('/upload', upload.single('imgFile'), postImage);

export default router;