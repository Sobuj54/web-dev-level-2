import { RequestHandler } from 'express';
import { createAFaculty, createAnAdmin, createAStudent } from './user.service';
import { asyncHandler } from '../../utils/asyncHandler';
import ApiResponse from '../../utils/ApiResponse';

const createStudent: RequestHandler = asyncHandler(async (req, res) => {
  const { student, ...user } = req.body;
  const result = await createAStudent(student, user);
  res
    .status(200)
    .json(new ApiResponse(200, result, 'Created user successfully.'));
});

const createFaculty = asyncHandler(async (req, res) => {
  const { faculty, ...userData } = req.body;
  const result = await createAFaculty(faculty, userData);

  res
    .status(200)
    .json(new ApiResponse(200, result, 'Created faculty successfully.'));
});

const createAdmin = asyncHandler(async (req, res) => {
  const { admin, ...userData } = req.body;
  const result = await createAnAdmin(admin, userData);

  res
    .status(200)
    .json(new ApiResponse(200, result, 'Created admin successfully.'));
});

export { createStudent, createFaculty, createAdmin };
