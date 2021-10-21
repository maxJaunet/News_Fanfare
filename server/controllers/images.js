import Image from '../models/images.js';


export const postImage = async (req, res) => {
  console.log(req.file);
    const newImage = new Image({
      visibilityAccess: req.body.visibilityAccess,
      desc: req.body.desc,
      file: req.file
    });
    
    try {
      newImage.save()
      .then(() => {
        res.status(201).json(newImage);
      });
      
    } catch (error) {
      console.log(error);
      return res.send(`Error when trying upload image: ${error}`);
    }
  };


export const getImages = async (req, res) => {
    try {
        const allImages = await Image.find();
        res.status(200).json(allImages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};



