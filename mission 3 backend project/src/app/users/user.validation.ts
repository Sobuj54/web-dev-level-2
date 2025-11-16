import * as z from 'zod';
import { BloodGroupEnum, GenderEnum } from './user.constants';

// NESTED SCHEMAS
const GuardianSchema = z.object({
  fatherName: z.string().trim(),
  fatherOccupation: z.string().trim(),
  fatherContactNo: z.string().trim(),
  motherName: z.string().trim(),
  motherOccupation: z.string().trim(),
  motherContactNo: z.string().trim(),
  address: z.string().trim(),
});

const LocalGuardianSchema = z.object({
  name: z.string().trim(),
  occupation: z.string().trim(),
  contactNo: z.string().trim(),
  address: z.string().trim(),
});

export const createUserSchema = z.object({
  password: z.string().optional(),
  student: z.object({
    id: z.string().trim().min(1, 'Student ID is required'),

    name: z.string().trim(),
    gender: z.enum(GenderEnum),
    dateOfBirth: z.date(),

    email: z.email().trim(),
    contactNo: z.string().trim(),
    emergencyContactNo: z.string().trim(),

    presentAddress: z.string().trim(),
    permanentAddress: z.string().trim(),

    bloodGroup: z.enum(BloodGroupEnum).optional(),

    guardian: GuardianSchema,
    localGuardian: LocalGuardianSchema,

    academicSemester: z.string().trim().min(1),
    academicDepartment: z.string().trim().min(1),
    academicFaculty: z.string().trim().min(1),
  }),
});
