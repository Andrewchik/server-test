import mongoose, { Document } from 'mongoose';

interface MyBookModel extends Document {
  title: string;
  description: string;
  author: string;
}

const myBookSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
});

const MyBook = mongoose.model<MyBookModel>('MyBook', myBookSchema);

export default MyBook;