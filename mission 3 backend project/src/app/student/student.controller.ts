import { RequestHandler } from 'express';
import { asyncHandler } from '../../utils/asyncHandler';
import ApiResponse from '../../utils/ApiResponse';
import { paginationOptionsType } from '../academicSemester/academicSemester.interface';
import { studentFilterOptionsType } from './student.interface';
import {
  allStudents,
  deleteAStudent,
  singleStudent,
  updateAStudent,
} from './student.service';

const getStudents: RequestHandler = asyncHandler(async (req, res) => {
  const { page, limit, sortBy, sortOrder, searchTerm, id, email, name } =
    req.query;

  const checkOrder = (order: unknown): 'asc' | 'desc' => {
    const s = String(order || '').toLowerCase();
    return s === 'asc' ? 'asc' : 'desc';
  };

  const paginationOptions: paginationOptionsType = {
    page: Number(page) || 1,
    limit: Number(limit) || 10,
    sortBy: String(sortBy ?? 'year'),
    sortOrder: checkOrder(sortOrder),
  };

  const filterOptions: studentFilterOptionsType = {
    searchTerm: String(searchTerm ?? ''),
    id: String(id ?? ''),
    email: String(email ?? ''),
    name: String(name ?? ''),
  };

  const result = await allStudents(filterOptions, paginationOptions);

  res
    .status(200)
    .json(new ApiResponse(200, result, 'Fetched all semesters successfully.'));
});

const getSingleStudent: RequestHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await singleStudent(id);
  res
    .status(200)
    .json(new ApiResponse(200, result, 'Retrieved Semester successfully.'));
});

const updateStudent: RequestHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { ...newData } = req.body;
  const result = await updateAStudent(id, newData);
  res
    .status(200)
    .json(new ApiResponse(200, result, 'semester updated successfully.'));
});

const deleteStudent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await deleteAStudent(id);
  res
    .status(200)
    .json(new ApiResponse(200, result, 'Successfully deleted a semester.'));
});

export { getStudents, getSingleStudent, updateStudent, deleteStudent };
