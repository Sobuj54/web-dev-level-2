import { RequestHandler } from 'express';
import { asyncHandler } from '../../utils/asyncHandler';
import {
  allSemesters,
  createSemester,
  deleteASemester,
  singleSemester,
  updateASemester,
} from './academicSemester.service';
import ApiResponse from '../../utils/ApiResponse';
import {
  filterOptionsType,
  paginationOptionsType,
} from './academicSemester.interface';

const createAcademicSemester: RequestHandler = asyncHandler(
  async (req, res) => {
    const { ...semesterData } = req.body;
    const newSemester = await createSemester(semesterData);
    return res
      .status(201)
      .json(
        new ApiResponse(201, newSemester, 'Semester created successfully.')
      );
  }
);

const getAllSemesters: RequestHandler = asyncHandler(async (req, res) => {
  const { page, limit, sortBy, sortOrder, searchTerm, title, code, year } =
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

  const filterOptions: filterOptionsType = {
    searchTerm: String(searchTerm ?? ''),
    title: String(title ?? ''),
    code: String(code ?? ''),
    year: String(year ?? ''),
  };

  const result = await allSemesters(filterOptions, paginationOptions);

  res
    .status(200)
    .json(new ApiResponse(200, result, 'Fetched all semesters successfully.'));
});

const getSingleSemester: RequestHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await singleSemester(id);
  res
    .status(200)
    .json(new ApiResponse(200, result, 'Retrieved Semester successfully.'));
});

const updateSemester: RequestHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { ...newData } = req.body;
  const result = await updateASemester(id, newData);
  res
    .status(200)
    .json(new ApiResponse(200, result, 'semester updated successfully.'));
});

const deleteSemester = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await deleteASemester(id);
  res
    .status(200)
    .json(new ApiResponse(200, result, 'Successfully deleted a semester.'));
});

export {
  createAcademicSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
  deleteSemester,
};
