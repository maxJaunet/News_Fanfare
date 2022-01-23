import express from 'express';
import { deleteImage, getImages, postImage,editImage, getSingleImage } from '../controllers/images.js';
import { upload } from '../uploads/uploads.js';
import multer from 'multer';


const router = express.Router();



router.get('/', getImages);
router.get('/:imageID', getSingleImage);
router.post('/upload', upload.single('imgFile'), postImage);
router.delete('/:imageID', deleteImage);
router.patch('/:imageId', editImage);
router.put('/:imageId', editImage);

export default router;