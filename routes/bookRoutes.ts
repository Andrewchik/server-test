import { Router } from 'express';
import { getBooks, getMyBooks, createBook, updateBook, deleteBook } from '../controllers/bookController';

const router = Router();

router.get('/', getBooks);

router.get('/my', getMyBooks);

router.post('/create', createBook);

router.put('/:id', updateBook);

router.delete('/:id', deleteBook);

export default router;
