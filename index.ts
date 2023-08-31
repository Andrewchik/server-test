import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { connectDB } from './db';
import bookRoutes from './routes/bookRoutes';


const app: Application = express();
const PORT: number = 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use('/api/books', bookRoutes);

connectDB();


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
