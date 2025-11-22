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
    name: z.string().trim(),
    gender: z.enum(GenderEnum),
    dateOfBirth: z.string(),

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

export const createFacultyZodSchema = z.object({
  password: z.string().optional(),

  faculty: z.object({
    name: z.string({ error: 'name is required.' }),
    gender: z.string({
      error: 'Gender is required',
    }),
    dateOfBirth: z.string({
      error: 'Date of birth is required',
    }),
    email: z.email(),
    contactNo: z.string({
      error: 'Contact number is required',
    }),
    emergencyContactNo: z.string({
      error: 'Emergency contact number is required',
    }),
    bloodGroup: z
      .string({
        error: 'Blood group is required',
      })
      .optional(),
    presentAddress: z.string({
      error: 'Present address is required',
    }),
    permanentAddress: z.string({
      error: 'Permanent address is required',
    }),
    academicDepartment: z.string({
      error: 'Academic department is required',
    }),

    academicFaculty: z.string({
      error: 'Academic faculty is required',
    }),
    designation: z.string({
      error: 'Designation is required',
    }),
    profileImage: z.string().optional(),
  }),
});

export const createAdminZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),

    admin: z.object({
      name: z.string({ error: 'name is required.' }),

      dateOfBirth: z.string({
        error: 'Date of birth is required',
      }),

      gender: z.string({
        error: 'Gender is required',
      }),

      bloodGroup: z.string({
        error: 'Blood group is required',
      }),

      email: z.email(),

      contactNo: z.string({
        error: 'Contact number is required',
      }),

      emergencyContactNo: z.string({
        error: 'Emergency contact number is required',
      }),

      presentAddress: z.string({
        error: 'Present address is required',
      }),

      permanentAddress: z.string({
        error: 'Permanent address is required',
      }),

      managementDepartment: z.string({
        error: 'Management department is required',
      }),

      designation: z.string({
        error: 'Designation is required',
      }),

      profileImage: z.string().optional(),
    }),
  }),
});
