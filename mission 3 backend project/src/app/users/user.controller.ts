import { RequestHandler } from 'express';
import { createAStudent } from './user.service';
import { asyncHandler } from '../../utils/asyncHandler';
import ApiResponse from '../../utils/ApiResponse';

const createStudent: RequestHandler = asyncHandler(async (req, res) => {
  const { student, ...user } = req.body;
  const result = await createAStudent(student, user);
  res
    .status(200)
    .json(new ApiResponse(200, result, 'Created user successfully.'));
});

export { createStudent };
