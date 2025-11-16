// types/student.interface.ts
import { Types } from 'mongoose';

export type Gender = 'male' | 'female';
export type BloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'AB+'
  | 'AB-'
  | 'O+'
  | 'O-';

export interface IGuardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  address: string;
}

export interface ILocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
}

export interface IStudent {
  id: string | Types.ObjectId;
  name: string;
  gender: Gender;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  bloodGroup?: BloodGroup;
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  academicSemester: Types.ObjectId | string;
  academicDepartment: Types.ObjectId | string;
  academicFaculty: Types.ObjectId | string;
  createdAt: Date;
  updatedAt: Date;
}
