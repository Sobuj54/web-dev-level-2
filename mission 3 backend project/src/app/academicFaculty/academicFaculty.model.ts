import { model, Schema } from 'mongoose';
import { IAcademicFaculty } from './academicFaculty.interface';

const facultySchema = new Schema<IAcademicFaculty>({});

export const AcademicFaculty = model<IAcademicFaculty>(
  'AcademicFaculty',
  facultySchema
);
