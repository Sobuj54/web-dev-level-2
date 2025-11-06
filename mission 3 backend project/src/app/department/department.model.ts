import { model, Schema } from 'mongoose';
import { IDepartment } from './department.interface';

const departmentSchema = new Schema<IDepartment>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Department = model<IDepartment>('Department', departmentSchema);
