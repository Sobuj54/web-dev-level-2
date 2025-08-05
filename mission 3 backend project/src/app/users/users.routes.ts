import { Router } from 'express';
import { createUer } from './user.controller';

const router = Router();

router.route('/create-user').post(createUer);

export default router;
