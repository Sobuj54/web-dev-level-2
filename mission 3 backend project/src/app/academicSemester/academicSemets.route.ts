import { Router } from 'express';
import { validateZodRequest } from '../../middlewares/zodValidationMiddleware';
import {
  academicSemesterZodSchema,
  updateAcademicSemesterZodSchema,
} from './academicSemester.validation';
import {
  createAcademicSemester,
  deleteSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
} from './academicSemester.controller';

const router = Router();

router
  .route('/')
  .post(validateZodRequest(academicSemesterZodSchema), createAcademicSemester);
router.route('/').get(getAllSemesters);
router.route('/:id').get(getSingleSemester);
router
  .route('/:id')
  .patch(validateZodRequest(updateAcademicSemesterZodSchema), updateSemester);
router.route('/:id').delete(deleteSemester);

export const semesterRoutes = router;
