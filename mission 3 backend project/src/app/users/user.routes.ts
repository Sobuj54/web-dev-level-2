import { Router } from 'express';
import { createAdmin, createFaculty, createStudent } from './user.controller';
import { validateZodRequest } from '../../middlewares/zodValidationMiddleware';
import {
  createAdminZodSchema,
  createFacultyZodSchema,
  createUserSchema,
} from './user.validation';
import {
  verifyAuthentication,
  verifyAuthorization,
} from '../../middlewares/auth.middlewares';
import { USER_ROLE } from '../../enums/user';

const router = Router();

router
  .route('/create-student')
  .post(validateZodRequest(createUserSchema), createStudent);
router
  .route('/create-faculty')
  .post(
    verifyAuthentication,
    verifyAuthorization(USER_ROLE.ADMIN),
    validateZodRequest(createFacultyZodSchema),
    createFaculty
  );
router
  .route('/create-admin')
  .post(validateZodRequest(createAdminZodSchema), createAdmin);

export const userRoutes = router;
