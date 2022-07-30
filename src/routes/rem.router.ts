import express from 'express';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';
import {
  createRemHandler,
  deleteRemHandler,
  getRemByIdHandler,
  getRemsByUserIdHandler,
  updateRemHandler,
} from '../controllers/rem.controller';

const router = express.Router();

router.post('/', verifySession(), createRemHandler);
router.patch('/', verifySession(), updateRemHandler);
router.delete('/', verifySession(), deleteRemHandler);
router.get('/', verifySession(), getRemByIdHandler);
router.get('/user', verifySession(), getRemsByUserIdHandler);

export default router;
