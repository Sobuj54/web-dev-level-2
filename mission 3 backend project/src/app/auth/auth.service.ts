/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiError from '../../utils/ApiError';
import { IUser } from '../users/user.interface';
import { User } from '../users/user.model';
import { ILoginData } from './auth.interface';
import jwt, { JwtPayload } from 'jsonwebtoken';

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

const issueRefreshToken = async (token: string): Promise<string> => {
  let decodedToken: JwtPayload;
  try {
    decodedToken = jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET as string
    ) as JwtPayload;
    /*
     decoded token format: 
     {
      id: '6921c041c223f20a5074da69',
      role: 'faculty',
      iat: 1763906815,
      exp: 1764511615
    }
    */
  } catch (error) {
    throw new ApiError(401, 'Unauthorized', error);
  }

  const { id } = decodedToken;
  const user = await User.findById(id);
  if (!user) throw new ApiError(400, 'User not found.');

  const accessToken = user.generateAccessToken();
  return accessToken;
};

export { loginUser, issueRefreshToken };
