import ApiError from '../../utils/ApiError';
import { IAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAFaculty = async (
  faculty: IAcademicFaculty
): Promise<IAcademicFaculty> => {
  const result = await AcademicFaculty.create(faculty);
  if (!result) throw new ApiError(400, 'Faculty creation failed.');
  return result;
};

const allFaculties = async (): Promise<IAcademicFaculty[]> => {
  const faculties = await AcademicFaculty.find({});
  if (!faculties.length) throw new ApiError(404, 'No faculty found.');
  return faculties;
};

const deleteAFaculty = async (id: string): Promise<IAcademicFaculty> => {
  const faculty = await AcademicFaculty.findByIdAndDelete(id);
  if (!faculty) throw new ApiError(404, 'No faculty found.');
  return faculty;
};

const updateAFaculty = async (
  id: string,
  payload: IAcademicFaculty
): Promise<IAcademicFaculty> => {
  const faculty = await AcademicFaculty.findByIdAndUpdate(
    id,
    {
      $set: payload,
    },
    { new: true }
  );
  if (!faculty) throw new ApiError(404, 'No faculty found.');
  return faculty;
};

export { createAFaculty, allFaculties, deleteAFaculty, updateAFaculty };
