import { Router } from 'express';
import {
  deleteStudent,
  getSingleStudent,
  getStudents,
  updateStudent,
} from './student.controller';
import { validateZodRequest } from '../../middlewares/zodValidationMiddleware';
import { studentZodSchema } from './student.validation';

const router = Router();

router.route('/').get(getStudents);
router.route('/:id').get(getSingleStudent);
router.route('/:id').delete(deleteStudent);
router.route('/:id').patch(validateZodRequest(studentZodSchema), updateStudent);

export const studentRoutes = router;
