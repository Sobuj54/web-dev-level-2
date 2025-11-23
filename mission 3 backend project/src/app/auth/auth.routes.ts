import { Router } from 'express';
import { validateZodRequest } from '../../middlewares/zodValidationMiddleware';
import { loginZodValidation, zodCookieValidation } from './auth.validation';
import { login, refreshToken } from './auth.controller';

const router = Router();

router.route('/login').post(validateZodRequest(loginZodValidation), login);
router
  .route('/refresh-token')
  .post(validateZodRequest(zodCookieValidation, 'cookies'), refreshToken);

export const authRoutes = router;
