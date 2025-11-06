import { Router } from 'express';
import { validateZodRequest } from '../../middlewares/zodValidationMiddleware';
import {
  departmentUpdateZodValidation,
  departmentZodValidation,
} from './department.validation';
import {
  createDepartment,
  deleteDepartment,
  getAllDepartments,
  getDepartment,
  updateDepartment,
} from './department.controller';

const router = Router();

router
  .route('/')
  .post(validateZodRequest(departmentZodValidation), createDepartment);
router.route('/').get(getAllDepartments);
router.route('/:id').get(getDepartment);
router
  .route('/:id')
  .patch(validateZodRequest(departmentUpdateZodValidation), updateDepartment);
router.route('/:id').delete(deleteDepartment);

export const departmentRoutes = router;
