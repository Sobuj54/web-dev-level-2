import { RequestHandler } from 'express';
import { createUserService } from './user.service';
import { asyncHandler } from '../../utils/asyncHandler';
import ApiResponse from '../../utils/ApiResponse';

const createUer: RequestHandler = asyncHandler(async (req, res) => {
  const { user } = req.body;
  const result = await createUserService(user);
  res
    .status(200)
    .json(new ApiResponse(200, result, 'Created user successfully.'));
});

export { createUer };
