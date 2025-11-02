import { Router } from 'express';
import { createUer } from './user.controller';
import { validateZodRequest } from '../../middlewares/zodValidationMiddleware';
import { createUserSchema } from './user.validation';

const router = Router();

router
  .route('/create-user')
  .post(validateZodRequest(createUserSchema), createUer);

export const userRoutes = router;
