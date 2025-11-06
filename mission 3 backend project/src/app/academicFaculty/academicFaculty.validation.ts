import z from 'zod';

export const facultyZodValidation = z.object({
  title: z.string().min(3),
});
