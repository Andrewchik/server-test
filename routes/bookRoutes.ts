import { Router } from 'express';
import { getBooks } from '../controllers/bookController';

const router = Router();

router.get('/', getBooks);

export default router;