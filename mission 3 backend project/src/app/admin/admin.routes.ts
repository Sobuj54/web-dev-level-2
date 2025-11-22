import express from 'express';
import {
  deleteAdmin,
  getAdmin,
  getAdmins,
  updateAdmin,
} from './admin.controller';
import { validateZodRequest } from '../../middlewares/zodValidationMiddleware';
import { updateAdminZodSchema } from './admin.validation';
const router = express.Router();

router.route('/:id').get(getAdmin);
router.route('/').get(getAdmins);

router.route('/:id').delete(deleteAdmin);

router
  .route('/:id')
  .patch(validateZodRequest(updateAdminZodSchema), updateAdmin);

export const AdminRoutes = router;
