import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
  try {
    const mongodbUri = 'mongodb+srv://andrew:GoPro2323@cluster0.amrqtfy.mongodb.net/?retryWrites=true&w=majority';

    if (!mongodbUri) {
      console.error('MONGODB_URI environment variable is not set');
    } else {
      await mongoose.connect(mongodbUri);
      console.log('Connected to MongoDB');
    }
  
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
