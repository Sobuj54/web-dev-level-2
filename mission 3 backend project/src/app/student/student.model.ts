import mongoose, { Schema } from 'mongoose';
import { IStudent } from './student.interface';

export const studentSchema = new Schema<IStudent>(
  {
    id: {
      type: String,
      require: true,
      unique: true,
    },
    name: {
      type: String,
      trim: true,
    },
    gender: { type: String, enum: ['male', 'female'], required: true },
    dateOfBirth: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      index: true,
      match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address'],
    },
    contactNo: { type: String, trim: true },
    emergencyContactNo: { type: String, trim: true },
    presentAddress: { type: String, trim: true },
    permanentAddress: { type: String, trim: true },

    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },

    guardian: {
      fatherName: { type: String, trim: true },
      fatherOccupation: { type: String, trim: true },
      fatherContactNo: { type: String, trim: true },
      motherName: { type: String, trim: true },
      motherOccupation: { type: String, trim: true },
      motherContactNo: { type: String, trim: true },
      address: { type: String, trim: true },
    },
    localGuardian: {
      name: { type: String, trim: true },
      occupation: { type: String, trim: true },
      contactNo: { type: String, trim: true },
      address: { type: String, trim: true },
    },
    academicSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
      required: true,
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'Department',
      required: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export const Student = mongoose.model<IStudent>('Student', studentSchema);
