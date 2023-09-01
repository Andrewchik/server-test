import { Request, Response } from 'express';
import Book from '../models/book';


export const getBooks = async (req: Request, res: Response) => {  
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, description, author } = req.body;

    const newBook = new Book({
      title,
      description,
      author,
    });

    const savedBook = await newBook.save();

    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ message: 'Error creating a book', error });
  }
};
