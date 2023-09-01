import { Request, Response } from 'express';
// import Book from '../models/Book';
const Book = require('../models/Book')

export const getBooks = async (req: Request, res: Response) => {  
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
};
