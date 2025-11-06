import { z } from 'zod';
import { months } from './academicSemester.constants';

export const academicSemesterZodSchema = z.object({
  title: z.enum(['Autumn', 'Summer', 'Fall']),
  year: z.string(),
  code: z.enum(['01', '02', '03']),
  startMonth: z.enum(months, { error: 'start month is required' }),
  endMonth: z.enum(months, { error: 'end month is required' }),
});

export const updateAcademicSemesterZodSchema = z
  .object({
    title: z.enum(['Autumn', 'Summer', 'Fall']).optional(),
    year: z.string().optional(),
    code: z.enum(['01', '02', '03']).optional(),
    startMonth: z.enum(months, { error: 'start month is required' }).optional(),
    endMonth: z.enum(months, { error: 'end month is required' }).optional(),
  })
  .refine((data) => (data.title && data.code) || (!data.title && !data.code), {
    error: "Either provide both title and year or don't provide any.",
  });
