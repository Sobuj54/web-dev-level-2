import ApiError from '../../utils/ApiError';
import { generateFacultyId, generateStudentId } from './user.utils';
import { IUser } from './user.interface';
import { User } from './user.model';

const createUserService = async (user: IUser): Promise<IUser> => {
  const academicSemester = { year: '2026', code: '02' };
  let id;
  if (user.role == 'student') {
    id = await generateStudentId(academicSemester);
  } else if (user.role == 'faculty') {
    id = await generateFacultyId();
  } else {
    id = await generateFacultyId();
  }
  user.id = id;

  if (!user.password)
    user.password = process.env.DEFAULT_USER_PASSWORD as string;

  const newUser = await User.create(user);
  if (!newUser) throw new ApiError(400, 'Failed to create User.');
  return newUser;
};

export { createUserService };
