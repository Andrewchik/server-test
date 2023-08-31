import express, { Application } from 'express';
import cors from 'cors';

import { connectDB } from './db';
import Book from './models/book';
import bodyParser from 'body-parser';

const app: Application = express();
const PORT: number = 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectDB();


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
