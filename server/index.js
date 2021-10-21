import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import articleRoutes from './routes/articleRoutes.js';
import imageRoutes from './routes/imageRoutes.js';


const CONNECTION_URL = process.env.MONGO_URL;

const app = express();



app.use(express.json({ limit: '25mb', extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/events', eventRoutes);
app.use('/articles', articleRoutes);
app.use('/images', imageRoutes);


const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

