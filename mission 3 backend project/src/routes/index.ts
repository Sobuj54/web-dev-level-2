import { Router } from 'express';
import { userRoutes } from '../app/users/user.routes';
import { semesterRoutes } from '../app/academicSemester/academicSemets.route';
import { academicFacultyRoutes } from '../app/academicFaculty/academicFaculty.route';
import { departmentRoutes } from '../app/department/department.route';
import { studentRoutes } from '../app/student/student.routes';
import { FacultyRoutes } from '../app/faculty/faculty.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/academic-semesters', semesterRoutes);
router.use('/academic-faculty', academicFacultyRoutes);
router.use('/departments', departmentRoutes);
router.use('/students', studentRoutes);
router.use('/faculties', FacultyRoutes);

export default router;
