import z from 'zod';

export const loginZodValidation = z.object({
  id: z.string(),
  password: z.string(),
});

export const zodCookieValidation = z.object({
  refreshToken: z.string(),
});

export const changePasswordZodSchema = z.object({
  oldPassword: z.string({ error: 'Old password is required.' }),
  newPassword: z.string({ error: 'New password is required.' }),
});
