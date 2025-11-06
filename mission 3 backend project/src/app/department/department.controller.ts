import ApiResponse from '../../utils/ApiResponse';
import { asyncHandler } from '../../utils/asyncHandler';
import {
  allDepartments,
  createADepartment,
  deleteADepartment,
  getADepartment,
  updateADepartment,
} from './department.service';

const createDepartment = asyncHandler(async (req, res) => {
  const { ...payload } = req.body;
  const result = await createADepartment(payload);
  res
    .status(200)
    .json(new ApiResponse(200, result, 'Department created successfully.'));
});

const getDepartment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await getADepartment(id);
  res
    .status(200)
    .json(new ApiResponse(200, result, 'Fetched a department successfully.'));
});

const getAllDepartments = asyncHandler(async (req, res) => {
  const result = await allDepartments();
  res
    .status(200)
    .json(
      new ApiResponse(200, result, 'Fetched all departments successfully.')
    );
});

const updateDepartment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { ...payload } = req.body;
  const result = await updateADepartment(id, payload);
  res
    .status(200)
    .json(new ApiResponse(200, result, 'department updated successfully.'));
});

const deleteDepartment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await deleteADepartment(id);
  res
    .status(200)
    .json(new ApiResponse(200, result, 'deleted department successfully.'));
});

export {
  createDepartment,
  getAllDepartments,
  updateDepartment,
  deleteDepartment,
  getDepartment,
};
