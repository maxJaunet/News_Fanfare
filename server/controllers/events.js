import Event from '../models/events.js';

export const getEvents = async (req, res) => {
    try {
        const allEvents = await Event.find();
        res.status(200).json(allEvents);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createEvent = async (req, res) => {
    const events = req.body;
    const newEvent = new Event (events);  
    try {
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
};