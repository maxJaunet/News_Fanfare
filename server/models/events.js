import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    name: String,
    date: Date,
    place: String,
    eventType: String,
    description: String,
    imagePath: String,
    imageAlt: String,
    type: String
});

const Event = mongoose.model('Event', eventSchema);


export default Event;