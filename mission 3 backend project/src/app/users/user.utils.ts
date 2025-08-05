import { User } from './users.model';

const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();
  // The .lean() method in Mongoose is used to return plain JavaScript objects instead of full Mongoose documents.
  return lastUser?.id;
};

const generateUserId = async () => {
  const currentId = (await findLastUserId()) || String(0);
  const updatedId = parseInt(currentId) + 1;
  return updatedId.toString().padStart(5, '0');
};

export { generateUserId, findLastUserId };
