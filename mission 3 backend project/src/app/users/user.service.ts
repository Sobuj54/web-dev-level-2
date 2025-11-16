import ApiError from '../../utils/ApiError';
import { generateFacultyId, generateStudentId } from './user.utils';
import { IUser } from './user.interface';
import { User } from './user.model';
import { IStudent } from '../student/student.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.model';

const createAStudent = async (
  student: IStudent,
  user: IUser
): Promise<IUser> => {
  if (!user.password)
    user.password = process.env.DEFAULT_STUDENT_PASSWORD as string;

  user.role = 'student';

  const academicSemester = await AcademicSemester.findById(
    student.academicSemester
  );
  if (!academicSemester)
    throw new ApiError(404, 'academic semsester not found');

  user.id = await generateStudentId(academicSemester);

  const newUser = await User.create(user);
  if (!newUser) throw new ApiError(400, 'Failed to create User.');
  return newUser;
};

export { createAStudent };
