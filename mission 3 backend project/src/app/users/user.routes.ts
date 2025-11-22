import { Router } from 'express';
import { createAdmin, createFaculty, createStudent } from './user.controller';
import { validateZodRequest } from '../../middlewares/zodValidationMiddleware';
import {
  createAdminZodSchema,
  createFacultyZodSchema,
  createUserSchema,
} from './user.validation';

const router = Router();

router
  .route('/create-student')
  .post(validateZodRequest(createUserSchema), createStudent);
router
  .route('/create-faculty')
  .post(validateZodRequest(createFacultyZodSchema), createFaculty);
router
  .route('/create-admin')
  .post(validateZodRequest(createAdminZodSchema), createAdmin);

export const userRoutes = router;
