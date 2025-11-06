import { Router } from 'express';
import { userRoutes } from '../app/users/user.routes';
import { semesterRoutes } from '../app/academicSemester/academicSemets.route';
import { academicFacultyRoutes } from '../app/academicFaculty/academicFaculty.route';
import { departmentRoutes } from '../app/department/department.route';

const router = Router();

router.use('/users', userRoutes);
router.use('/academic-semesters', semesterRoutes);
router.use('/academic-faculty', academicFacultyRoutes);
router.use('/departments', departmentRoutes);

export default router;
