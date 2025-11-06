import ApiError from '../../utils/ApiError';
import { IDepartment } from './department.interface';
import { Department } from './department.model';

const createADepartment = async (
  payload: IDepartment
): Promise<IDepartment> => {
  const department = await Department.create(payload);
  if (!department) throw new ApiError(400, 'Department creation failed');
  return department;
};

const getADepartment = async (id: string): Promise<IDepartment> => {
  const dept = await Department.findById(id).populate('faculty');
  if (!dept) throw new ApiError(404, 'no department found.');
  return dept;
};

const allDepartments = async (): Promise<IDepartment[]> => {
  const departments = await Department.find({}).populate('faculty');
  return departments;
};

const updateADepartment = async (
  id: string,
  payload: Partial<IDepartment>
): Promise<IDepartment> => {
  const updatedDepartment = await Department.findByIdAndUpdate(
    id,
    {
      $set: payload,
    },
    { new: true, runValidators: true }
  );

  if (!updatedDepartment) throw new ApiError(400, 'department update failed.');

  return updatedDepartment;
};

const deleteADepartment = async (id: string): Promise<IDepartment> => {
  const dept = await Department.findByIdAndDelete(id);
  if (!dept) throw new ApiError(404, 'no department found.');
  return dept;
};

export {
  createADepartment,
  allDepartments,
  updateADepartment,
  deleteADepartment,
  getADepartment,
};
