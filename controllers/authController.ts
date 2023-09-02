import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AdminModel from '../models/admin';

export const logIn = async (req: Request, res: Response) => {
    try {
        const { login, password } = req.body;
    
        const admin = await AdminModel.findOne({ login });
    
        if (!admin) {
          return res.status(401).json({ message: 'Administrator not found' });
        }
    
        console.log(admin);
        
        const passwordMatch = await bcrypt.compare(password, admin.password);
    
        if (!passwordMatch) {
          return res.status(401).json({ message: 'Incorrect password' });
        }
    
        // Вставте свій secret-key згенерувавши його у файлі generateSecretKey.ts
        const token = jwt.sign({ adminId: admin._id }, 'your-secret-key', { expiresIn: '1h' });
    
        res.json({ token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
  };