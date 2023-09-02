import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';

import { connectDB } from './db';
import bookRoutes from './routes/bookRoutes';
import authRoutes from './routes/authRoutes';


const app: Application = express();
const PORT: number = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use('/api/books', bookRoutes);
app.use('/auth', authRoutes);

connectDB();


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
