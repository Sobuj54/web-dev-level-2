import { Router } from 'express';
import { validateZodRequest } from '../../middlewares/zodValidationMiddleware';
import {
  changePasswordZodSchema,
  loginZodValidation,
  zodCookieValidation,
} from './auth.validation';
import { changePassword, login, refreshToken } from './auth.controller';
import { verifyAuthentication } from '../../middlewares/auth.middlewares';

const router = Router();

router.route('/login').post(validateZodRequest(loginZodValidation), login);
router
  .route('/refresh-token')
  .post(validateZodRequest(zodCookieValidation, 'cookies'), refreshToken);
router
  .route('/change-password')
  .post(
    verifyAuthentication,
    validateZodRequest(changePasswordZodSchema),
    changePassword
  );

export const authRoutes = router;
