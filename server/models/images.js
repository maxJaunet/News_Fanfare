import mongoose from 'mongoose';

const imageSchema = mongoose.Schema({
    visibilityAccess: String,
    desc: String,
    file: Object,
    type: String
});

const Image = mongoose.model('Image', imageSchema);


export default Image;