import { Router } from 'express';
import { getMyBooks, createBook, updateBook, deleteBook, deleteMyBook } from '../controllers/bookController';

const router = Router();

// router.get('/', getBooks);
router.post('/create', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

router.get('/my', getMyBooks);
router.delete('/my/:id', deleteMyBook);

export default router;
