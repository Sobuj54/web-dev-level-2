import { Router } from 'express';
import { validateZodRequest } from '../../middlewares/zodValidationMiddleware';
import { academicSemesterZodSchema } from './academicSemester.validation';
import {
  createAcademicSemester,
  getAllSemesters,
} from './academicSemester.controller';

const router = Router();

router
  .route('/')
  .post(validateZodRequest(academicSemesterZodSchema), createAcademicSemester);
router.route('/').get(getAllSemesters);

export const semesterRoutes = router;
