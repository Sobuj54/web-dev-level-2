import ApiError from '../../utils/ApiError';
import { semesterTitleCodeMapper } from './academicSemester.constants';
import {
  filterOptionsType,
  IAcademicSemester,
  IGenericResponse,
  paginationOptionsType,
} from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (semesterTitleCodeMapper[payload.title] != payload.code)
    throw new ApiError(400, 'Invalid semester code.');

  const result = await AcademicSemester.create(payload);
  if (!result) throw new ApiError(400, 'Result creation failed.');
  return result;
};

const allSemesters = async (
  filterOptions: filterOptionsType,
  paginationOptions: paginationOptionsType
): Promise<IGenericResponse<IAcademicSemester>> => {
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

  const result = await AcademicSemester.find({
    $and: filterConditions,
  })
    .sort({ [sortBy]: sortOrder })
    .skip(skip)
    .limit(limit);

  if (!result.length) throw new ApiError(404, 'No semester found.');

  const total = await AcademicSemester.countDocuments({
    $and: filterConditions,
  });
  return {
    page,
    limit,
    total,
    data: result,
  };
};

const singleSemester = async (id: string): Promise<IAcademicSemester> => {
  const result = await AcademicSemester.findById(id).lean();
  if (!result) throw new ApiError(404, 'Semester not found.');
  return result;
};

const updateASemester = async (
  id: string,
  newData: Partial<IAcademicSemester>
): Promise<IAcademicSemester> => {
  if (newData.title && semesterTitleCodeMapper[newData.title] != newData.code)
    throw new ApiError(400, 'Invalid semester code.');

  const updatedSemester = await AcademicSemester.findByIdAndUpdate(
    id,
    {
      $set: newData,
    },
    { new: true, runValidators: true }
  );
  if (!updatedSemester) throw new ApiError(400, 'Semester updated failed.');
  return updatedSemester;
};

const deleteASemester = async (id: string): Promise<IAcademicSemester> => {
  const result = await AcademicSemester.findByIdAndDelete(id);
  if (!result) throw new ApiError(400, 'Semester delete failed.');
  return result;
};

export {
  createSemester,
  allSemesters,
  singleSemester,
  updateASemester,
  deleteASemester,
};
