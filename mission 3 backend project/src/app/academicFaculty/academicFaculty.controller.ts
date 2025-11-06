import ApiResponse from '../../utils/ApiResponse';
import { asyncHandler } from '../../utils/asyncHandler';
import {
  allFaculties,
  createAFaculty,
  deleteAFaculty,
  updateAFaculty,
} from './academicFaculty.service';

const createFaculty = asyncHandler(async (req, res) => {
  const { ...faculty } = req.body;
  const result = await createAFaculty(faculty);
  res
    .status(201)
    .json(new ApiResponse(201, result, 'Faculty created successfully.'));
});

const getAllFaculty = asyncHandler(async (req, res) => {
  const result = await allFaculties();
  res
    .status(200)
    .json(new ApiResponse(200, result, 'All faculties fetched successfully'));
});

const deleteFaculty = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await deleteAFaculty(id);
  res
    .status(200)
    .json(new ApiResponse(200, result, 'Faculty deleted successfully.'));
});

const updateFaculty = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { ...payload } = req.body;
  const result = await updateAFaculty(id, payload);
  res
    .status(200)
    .json(new ApiResponse(200, result, 'Faculty updated successfully.'));
});

export { createFaculty, getAllFaculty, deleteFaculty, updateFaculty };
