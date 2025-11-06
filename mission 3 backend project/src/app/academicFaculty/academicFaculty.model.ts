import { model, Schema } from 'mongoose';
import { IAcademicFaculty } from './academicFaculty.interface';
import ApiError from '../../utils/ApiError';

const facultySchema = new Schema<IAcademicFaculty>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

facultySchema.pre('save', async function (next) {
  const faculty = await AcademicFaculty.findOne({ title: this.title });
  if (faculty) throw new ApiError(400, 'faculty already exists.');
  next();
});

export const AcademicFaculty = model<IAcademicFaculty>(
  'AcademicFaculty',
  facultySchema
);
