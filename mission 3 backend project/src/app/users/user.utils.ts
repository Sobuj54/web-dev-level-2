import { User } from './user.model';

const findLastUserId = async (): Promise<string | undefined> => {
  const lastUser = await User.findOne({ role: 'student' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();
  // The .lean() method in Mongoose is used to return plain JavaScript objects instead of full Mongoose documents.
  return lastUser?.id;
};

const generateStudentId = async (academicSemester: {
  year: string;
  code: string;
}): Promise<string> => {
  const currentId = await findLastUserId();
  let updatedId;
  if (currentId) {
    updatedId = (parseInt(currentId) + 1).toString();
  } else {
    const paddedNumber = String(1).padStart(5, '0');
    updatedId = `${academicSemester.year.substring(2)}${academicSemester.code}${paddedNumber}`;
  }
  return updatedId;
};

const findLastFacultyId = async (): Promise<string | undefined> => {
  const faculty = await User.findOne({ role: 'faculty' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();
  return faculty?.id;
};

const generateFacultyId = async () => {
  let currentId = await findLastFacultyId();
  let updatedId;
  if (currentId) {
    currentId = currentId.split('-')[1];
    updatedId = `F-${(parseInt(currentId) + 1).toString().padStart(5, '0')}`;
  } else {
    const paddedNumber = String(1).padStart(5, '0');
    updatedId = `F-${paddedNumber}`;
  }
  return updatedId;
};

const findLastAdminId = async (): Promise<string | undefined> => {
  const lastFaculty = await User.findOne({ role: 'admin' }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
};

const generateAdminId = async (): Promise<string> => {
  const currentId =
    (await findLastAdminId()) || (0).toString().padStart(5, '0');
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementedId = `A-${incrementedId}`;

  return incrementedId;
};

export {
  generateStudentId,
  findLastUserId,
  generateFacultyId,
  generateAdminId,
};
