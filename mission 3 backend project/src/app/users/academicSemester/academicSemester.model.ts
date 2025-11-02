import mongoose, { Schema } from 'mongoose';
import {
  AcademicModelType,
  IAcademicSemester,
} from './academicSemester.interface';

const academicSemesterSchema = new Schema<IAcademicSemester, AcademicModelType>(
  {
    title: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
    },
    endMonth: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const AcademicSemester = mongoose.model<
  IAcademicSemester,
  AcademicModelType
>('AcademicSemester', academicSemesterSchema);
