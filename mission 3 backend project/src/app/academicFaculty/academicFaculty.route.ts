import { Router } from 'express';
import { validateZodRequest } from '../../middlewares/zodValidationMiddleware';
import { facultyZodValidation } from './academicFaculty.validation';
import {
  createFaculty,
  deleteFaculty,
  getAllFaculty,
  updateFaculty,
} from './academicFaculty.controller';

const router = Router();

router.route('/').post(validateZodRequest(facultyZodValidation), createFaculty);
router.route('/').get(getAllFaculty);
router.route('/:id').delete(deleteFaculty);
router
  .route('/:id')
  .patch(validateZodRequest(facultyZodValidation), updateFaculty);

export const academicFacultyRoutes = router;
