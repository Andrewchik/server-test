import { Request, Response } from 'express';
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
});


const Book = mongoose.model('Book', bookSchema);

export const getBooks = async (req: Request, res: Response) => {  
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
};
