import { RequestHandler } from 'express';
import { ZodObject } from 'zod';

export const validateZodRequest = (schema: ZodObject): RequestHandler => {
  return async (req, res, next) => {
    try {
      await schema.parseAsync(req.body);
      return next();
    } catch (err) {
      return next(err);
    }
  };
};
