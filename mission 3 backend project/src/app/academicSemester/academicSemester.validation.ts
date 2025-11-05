import { z } from 'zod';
import { months } from './academicSemester.constants';

export const academicSemesterZodSchema = z.object({
  title: z.enum(['Autumn', 'Summer', 'Fall']),
  year: z.string(),
  code: z.enum(['01', '02', '03']),
  startMonth: z.enum(months, { error: 'start month is required' }),
  endMonth: z.enum(months, { error: 'end month is required' }),
});
