import * as z from 'zod';
import { BloodGroupEnum, GenderEnum } from '../users/user.constants';

// NESTED SCHEMAS
const GuardianSchema = z
  .object({
    fatherName: z.string().trim().optional(),
    fatherOccupation: z.string().trim().optional(),
    fatherContactNo: z.string().trim().optional(),
    motherName: z.string().trim().optional(),
    motherOccupation: z.string().trim().optional(),
    motherContactNo: z.string().trim().optional(),
    address: z.string().trim().optional(),
  })
  .optional();

const LocalGuardianSchema = z
  .object({
    name: z.string().trim().optional(),
    occupation: z.string().trim().optional(),
    contactNo: z.string().trim().optional(),
    address: z.string().trim().optional(),
  })
  .optional();

export const studentZodSchema = z.object({
  name: z.string().trim().optional(),
  gender: z.enum(GenderEnum).optional(),
  dateOfBirth: z.string().optional(),

  email: z.email().trim().optional(),
  contactNo: z.string().trim().optional(),
  emergencyContactNo: z.string().trim().optional(),

  presentAddress: z.string().trim().optional(),
  permanentAddress: z.string().trim().optional(),

  bloodGroup: z.enum(BloodGroupEnum).optional(),

  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema,

  academicSemester: z.string().trim().min(1).optional(),
  academicDepartment: z.string().trim().min(1).optional(),
  academicFaculty: z.string().trim().min(1).optional(),
});
