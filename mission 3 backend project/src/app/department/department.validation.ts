import z from 'zod';

export const departmentZodValidation = z.object({
  title: z.string(),
  faculty: z.string(),
});

export const departmentUpdateZodValidation = z.object({
  title: z.string().optional(),
  faculty: z.string().optional(),
});
