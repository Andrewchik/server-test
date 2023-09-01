import { Router } from 'express';
import { getBooks, createBook } from '../controllers/bookController';

const router = Router();

router.get('/', getBooks);

router.post('/create', createBook);

export default router;
