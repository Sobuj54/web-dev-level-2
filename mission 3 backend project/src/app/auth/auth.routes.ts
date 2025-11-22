import { Router } from 'express';
import { validateZodRequest } from '../../middlewares/zodValidationMiddleware';
import { loginZodValidation } from './auth.validation';
import { login } from './auth.controller';

const router = Router();

router.route('/login').post(validateZodRequest(loginZodValidation), login);

export const authRoutes = router;
