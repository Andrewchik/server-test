import mongoose, { Document } from 'mongoose';

interface BookModel extends Document {
  id: number;
  title: string;
  description: string;
  author: string;
}

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
});


const Book = mongoose.model<BookModel>('Book', bookSchema);

module.exports = Book;
