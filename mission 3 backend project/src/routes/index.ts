import { Router } from 'express';
import { userRoutes } from '../app/users/user.routes';
import { semesterRoutes } from '../app/academicSemester/academicSemets.route';

const router = Router();

router.use('/users', userRoutes);
router.use('/academic-semesters', semesterRoutes);

export default router;
