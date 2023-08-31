import { Request, Response } from 'express';
import Book from '../models/Book';

export const getBooks = async (req: Request, res: Response) => {  
  try {
    const articles = await Book.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
};
