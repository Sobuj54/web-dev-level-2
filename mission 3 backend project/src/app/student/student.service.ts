/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiError from '../../utils/ApiError';
import {
  IGenericResponse,
  paginationOptionsType,
} from '../academicSemester/academicSemester.interface';
import { IStudent, studentFilterOptionsType } from './student.interface';
import { Student } from './student.model';

const allStudents = async (
  filterOptions: studentFilterOptionsType,
  paginationOptions: paginationOptionsType
): Promise<IGenericResponse<IStudent>> => {
  const { page, limit, sortBy, sortOrder } = paginationOptions;
  const skip = (page - 1) * limit;
  const { searchTerm, ...filterData } = filterOptions;

  const filterConditions = [];
  if (searchTerm) {
    filterConditions.push({
      $or: [
        {
          title: { $regex: searchTerm, $options: 'i' },
        },
        {
          code: { $regex: searchTerm, $options: 'i' },
        },
        {
          year: { $regex: searchTerm, $options: 'i' },
        },
      ],
    });
  }

  if (Object.values(filterData).length) {
    Object.entries(filterData).map(([field, value]) => {
      if (value) filterConditions.push({ [field]: value });
    });
  }

  const result = await Student.find({
    $and: filterConditions,
  })
    .populate(['academicSemester', 'academicDepartment', 'academicFaculty'])
    .sort({ [sortBy]: sortOrder })
    .skip(skip)
    .limit(limit);

  if (!result.length) throw new ApiError(404, 'No semester found.');

  const total = await Student.countDocuments({
    $and: filterConditions,
  });
  return {
    page,
    limit,
    total,
    data: result,
  };
};

const singleStudent = async (id: string): Promise<IStudent> => {
  const result = await Student.findById(id)
    .populate(['academicSemester', 'academicDepartment', 'academicFaculty'])
    .lean();
  if (!result) throw new ApiError(404, 'Semester not found.');
  return result;
};

const updateAStudent = async (
  id: string,
  newData: Partial<IStudent>
): Promise<IStudent> => {
  const exists = await Student.findOne({ id });
  if (!exists) throw new ApiError(404, 'No student found.');

  const { guardian, localGuardian, ...studentData } = newData;
  const updatedStudentData: Partial<IStudent> = { ...studentData };

  if (guardian && Object.keys(guardian).length > 0) {
    Object.keys(guardian).forEach((key) => {
      const guardianKey = `guardian.${key}` as keyof Partial<IStudent>;
      (updatedStudentData as any)[guardianKey] =
        guardian[key as keyof typeof guardian];
    });
  }

  if (localGuardian && Object.keys(localGuardian).length > 0) {
    Object.keys(localGuardian).forEach((key) => {
      const localGuardianKey =
        `localGuardian.${key}` as keyof Partial<IStudent>;
      (updatedStudentData as any)[localGuardianKey] =
        localGuardian[key as keyof typeof localGuardian];
    });
  }

  const updatedSemester = await Student.findOneAndUpdate(
    { id },
    {
      $set: updatedStudentData,
    },
    { new: true, runValidators: true }
  );
  if (!updatedSemester) throw new ApiError(400, 'Semester updated failed.');
  return updatedSemester;
};

const deleteAStudent = async (id: string): Promise<IStudent> => {
  const result = await Student.findByIdAndDelete(id);
  if (!result) throw new ApiError(400, 'Semester delete failed.');
  return result;
};

export { allStudents, singleStudent, updateAStudent, deleteAStudent };
