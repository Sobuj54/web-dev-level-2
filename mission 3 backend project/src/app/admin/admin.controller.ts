import pick from '../../shared/pick';
import ApiResponse from '../../utils/ApiResponse';
import { asyncHandler } from '../../utils/asyncHandler';
import { paginationFields } from '../faculty/faculty.constants';
import { adminFilterableFields } from './admin.constants';
import {
  deleteAnAdmin,
  getAllAdmins,
  getSingleAdmin,
  updateAnAdmin,
} from './admin.service';

const getAdmins = asyncHandler(async (req, res) => {
  const filters = pick(req.query, adminFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await getAllAdmins(filters, paginationOptions);

  res
    .status(200)
    .json(new ApiResponse(200, result, 'Fetched all admins successfully.'));
});

const getAdmin = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await getSingleAdmin(id);

  res
    .status(200)
    .json(new ApiResponse(200, result, 'Fetched admin successfully.'));
});

const updateAdmin = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await updateAnAdmin(id, updatedData);

  res
    .status(200)
    .json(new ApiResponse(200, result, 'Admin updated successfully.'));
});
const deleteAdmin = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const result = await deleteAnAdmin(id);

  res
    .status(200)
    .json(new ApiResponse(200, result, 'Deleted an admin successfully.'));
});

export { getAdmins, getAdmin, updateAdmin, deleteAdmin };
