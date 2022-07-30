import express from 'express';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';
import {
  createPageHandler,
  deletePageHandler,
  getPageByIdHandler,
  getPagesByUserIdHandler,
  updatePageHandler,
} from '../controllers/page.controller';

const router = express.Router();

router.post('/', verifySession(), createPageHandler);
router.patch('/', verifySession(), updatePageHandler);
router.delete('/', verifySession(), deletePageHandler);
router.get('/', verifySession(), getPageByIdHandler);
router.get('/user', verifySession(), getPagesByUserIdHandler);

export default router;
