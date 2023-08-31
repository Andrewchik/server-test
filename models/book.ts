import mongoose, { Document } from 'mongoose';

interface BookModel extends Document {
  id: number;
  title: string;
  description: string;
  author: string;
}

const bookSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  author: String,
});

export const Book = mongoose.model<BookModel>('Book', bookSchema);
