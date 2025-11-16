import * as z from 'zod';

export const createUserSchema = z.object({
  role: z.string().min(1, 'role is required.'),
  password: z.string().optional(),
});
