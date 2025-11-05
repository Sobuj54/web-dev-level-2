import mongoose, { Schema } from 'mongoose';
import {
  AcademicModelType,
  IAcademicSemester,
} from './academicSemester.interface';
import { months } from './academicSemester.constants';
import ApiError from '../../utils/ApiError';

const academicSemesterSchema = new Schema<IAcademicSemester, AcademicModelType>(
  {
    title: {
      type: String,
      required: true,
      enum: ['Autumn', 'Summer', 'Fall'],
    },
    code: {
      type: String,
      required: true,
      enum: ['01', '02', '03'],
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: months,
    },
  },
  { timestamps: true }
);

academicSemesterSchema.pre('save', async function (next) {
  const semesterExists = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (semesterExists) throw new ApiError(409, 'Semester already exists.');
  next();
});

export const AcademicSemester = mongoose.model<
  IAcademicSemester,
  AcademicModelType
>('AcademicSemester', academicSemesterSchema);
