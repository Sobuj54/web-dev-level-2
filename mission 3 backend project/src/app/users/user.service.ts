import ApiError from '../../utils/ApiError';
import { generateStudentId } from './user.utils';
import { IUser } from './user.interface';
import { User } from './user.model';
import { IStudent } from '../student/student.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import mongoose from 'mongoose';
import { Student } from '../student/student.model';

const createAStudent = async (
  student: IStudent,
  user: IUser
): Promise<IUser | null> => {
  if (!user.password)
    user.password = process.env.DEFAULT_STUDENT_PASSWORD as string;

  user.role = 'student';

  const academicSemester = await AcademicSemester.findById(
    student.academicSemester
  );
  if (!academicSemester)
    throw new ApiError(404, 'academic semsester not found');

  let newStudentData;
  // transaction and rollback
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const id = await generateStudentId(academicSemester);
    user.id = id;
    student.id = id;

    //createStudent will be an array because of transaction
    const createStudent = await Student.create([student], { session }); // used array for student because of transaction
    if (!createStudent.length)
      throw new ApiError(400, 'Failed to created student.');

    user.student = createStudent[0]._id;
    const newUser = await User.create([user], { session });
    if (!newUser.length) throw new ApiError(400, 'Failed to create user.');

    newStudentData = newUser[0];
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newStudentData) {
    newStudentData = await User.findOne({ id: newStudentData.id }).populate({
      path: 'student',
      populate: [
        { path: 'academicSemester' },
        { path: 'academicDepartment' },
        { path: 'academicFaculty' },
      ],
    });
  }
  return newStudentData;
};

export { createAStudent };
