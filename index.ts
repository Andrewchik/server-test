import express, { Application } from 'express';
import { connectDB } from './db';
const app: Application = express();
const PORT: number = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectDB();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
