import express from 'express';
import { validateZodRequest } from '../../middlewares/zodValidationMiddleware';
import { updateFacultyZodSchema } from './faculty.validation';
import {
  deleteFaculty,
  getFaculties,
  getFaculty,
  updateFaculty,
} from './faculty.controller';

const router = express.Router();

router.route('/:id').get(getFaculty);
router.route('/').get(getFaculties);

router
  .route('/:id')
  .patch(validateZodRequest(updateFacultyZodSchema), updateFaculty);

router.route('/:id').delete(deleteFaculty);

export const FacultyRoutes = router;
