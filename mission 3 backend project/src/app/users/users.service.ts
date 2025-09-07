import ApiError from '../../utils/ApiError';
import { generateUserId } from './user.utils';
import { IUser } from './users.interface';
import { User } from './users.model';

const createUserService = async (user: IUser): Promise<IUser> => {
  const id = await generateUserId();
  user.id = id;

  if (!user.password)
    user.password = process.env.DEFAULT_USER_PASSWORD as string;

  const newUser = await User.create(user);
  if (!newUser) throw new ApiError(400, 'Failed to create User.');
  return newUser;
};

export { createUserService };
