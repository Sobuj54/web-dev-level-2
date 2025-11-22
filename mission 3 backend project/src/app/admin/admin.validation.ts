import { z } from 'zod';

export const updateAdminZodSchema = z.object({
  name: z.string(),

  dateOfBirth: z.string().optional(),

  gender: z.string().optional(),

  bloodGroup: z.string().optional(),

  email: z.string().email().optional(),

  contactNo: z.string().optional(),

  emergencyContactNo: z.string().optional(),

  presentAddress: z.string().optional(),

  permanentAddress: z.string().optional(),

  department: z.string().optional(),

  designation: z.string().optional(),

  profileImage: z.string().optional(),
});
