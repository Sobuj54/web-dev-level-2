import ApiError from '../../utils/ApiError';
import { IUser } from '../users/user.interface';
import { User } from '../users/user.model';
import { ILoginData } from './auth.interface';

const loginUser = async (
  data: ILoginData
): Promise<{
  accessToken: string;
  refreshToken: string;
  user: Partial<IUser>;
}> => {
  const { id, password } = data;

  const user = await User.findOne({ id }).select('+password');
  if (!user) throw new ApiError(400, 'No user found');

  const isCorrect = await user.isPasswordCorrect(password);
  if (!isCorrect) throw new ApiError(401, 'Incorrect password');

  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  user.refreshToken = refreshToken;
  await user.save();

  const userObj = user.toObject() as Partial<IUser>;
  delete userObj?.password;
  delete userObj?.refreshToken;

  return {
    accessToken,
    refreshToken,
    user: userObj,
  };
};

export { loginUser };
