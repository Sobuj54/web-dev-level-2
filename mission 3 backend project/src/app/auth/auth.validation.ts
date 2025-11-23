import z from 'zod';

export const loginZodValidation = z.object({
  id: z.string(),
  password: z.string(),
});

export const zodCookieValidation = z.object({
  refreshToken: z.string(),
});
