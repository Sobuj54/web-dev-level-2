import { Request, Response } from 'express';
import { asyncHandler } from '../../utils/asyncHandler';
import pick from '../../shared/pick';
import { facultyFilterableFields, paginationFields } from './faculty.constants';
import ApiResponse from '../../utils/ApiResponse';
import {
  deleteAFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateAFaculty,
} from './faculty.service';

const getFaculties = asyncHandler(async (req: Request, res: Response) => {
  const filters = pick(req.query, facultyFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await getAllFaculties(filters, paginationOptions);

  res.status(201).json(new ApiResponse(201, result, 'Fetched all faculties.'));
});

const getFaculty = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await getSingleFaculty(id);

  res
    .status(201)
    .json(new ApiResponse(201, result, 'Faculty retrived successfully..'));
});

const updateFaculty = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await updateAFaculty(id, updatedData);

  res
    .status(201)
    .json(new ApiResponse(201, result, 'Faculty updated successfully.'));
});

const deleteFaculty = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await deleteAFaculty(id);

  res.status(201).json(new ApiResponse(201, result, 'Deleted a Faculty.'));
});

export { getFaculties, getFaculty, updateFaculty, deleteFaculty };
