import { Request, Response } from 'express';
import Book from '../models/book';
import MyBook from '../models/mybook';


// export const getBooks = async (req: Request, res: Response) => {  
//   try {
//     const books = await Book.find();
//     res.json(books);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching books', error });
//   }
// };

export const getBooks = async () => {
  try {
    const books = await Book.find();
    
    return books;
  } catch (error) {
    throw new Error('Error fetching books'); // You can handle errors at a higher level in your GraphQL schema or resolver
  }
};

export const getMyBooks = async (req: Request, res: Response) => {  
  try {
    const books = await MyBook.find();
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

export const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedBook = await MyBook.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.json(updatedBook);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating book', error });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndRemove(id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    const { title, description, author } = deletedBook.toObject();
    const newMyBook = new MyBook({ title, description, author });

    const savedMyBook = await newMyBook.save();

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting book', error });
  }
};


export const deleteMyBook = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedMyBook = await MyBook.findByIdAndRemove(id);

    if (!deletedMyBook) {
      return res.status(404).json({ message: 'MyBook not found' });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting MyBook', error });
  }
};
