import Image from '../models/images.js';


export const postImage = async (req, res) => {
    const newImage = new Image({
      visibilityAccess: req.body.visibilityAccess,
      desc: req.body.desc,
      file: req.file
    });
    
    try {
      newImage.save()
      .then(() => {
        console.log('image successfully posted');
        res.status(201).json(newImage);
      });
      
    } catch (error) {
      console.log(error);
      return res.send(`Error when trying upload image: ${error}`);
    }
  };


// Read All

export const getImages = async (req, res) => {
    try {
        const allImages = await Image.find();
        res.status(200).json(allImages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Read One

export const getSingleImage = async (req, res) => {
    try {
        const targetedImage = await Image.findOne({_id: req.params.imageID});
        res.status(200).json(targetedImage);
        console.log('image found in database')
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


// UpdateOne / Dispatch

export const editImage = async (req, res) => {
  const filter = req.params.imageId;
  const update = req.body;
  console.log(update);
  try {
    const updatedImage = await Post.findOneAndUpdate({_id: filter}, {$set: update}, {new: true});
    res.status(200).json(updatedImage);
  } catch (error) {
    res.status(404).json({ message: String(error) })
  }
}


// Delete One

export const deleteImage = async (req, res) => {
  try {
    const targetedImage = await Image.deleteOne({_id: req.params.imageID});
    res.status(200).json(targetedImage)
    console.log('item successfully deleted');
  }
  catch(error) {
    res.status(403).json({message: String(error)})
  }
}



