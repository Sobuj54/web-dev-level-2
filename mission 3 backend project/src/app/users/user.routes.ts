import { Router } from 'express';
import { createStudent } from './user.controller';
import { validateZodRequest } from '../../middlewares/zodValidationMiddleware';
import { createUserSchema } from './user.validation';

const router = Router();

router
  .route('/create-student')
  .post(validateZodRequest(createUserSchema), createStudent);

export const userRoutes = router;
