import ApiResponse from '../../utils/ApiResponse';
import { asyncHandler } from '../../utils/asyncHandler';
import { cookieOptions } from './auth.constants';
import { loginUser } from './auth.service';

const login = asyncHandler(async (req, res) => {
  const { ...data } = req.body;
  const { accessToken, refreshToken, user } = await loginUser(data);
  res
    .status(200)
    .cookie('refreshToken', refreshToken, cookieOptions)
    .json(
      new ApiResponse(200, { accessToken, user }, 'logged in successfully')
    );
});

export { login };
