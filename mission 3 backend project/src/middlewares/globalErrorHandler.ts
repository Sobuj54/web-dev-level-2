import { NextFunction, Request, Response } from 'express';
import ApiError from '../utils/ApiError';
import { errorLogger } from '../shared/logger';
import ApiResponse from '../utils/ApiResponse';

const globalErrorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error =
    err instanceof ApiError
      ? err
      : new ApiError(500, (err as Error).message || 'Internal Server Error.');

  errorLogger.error({
    message: error.message,
    statusCode: error.statusCode,
  });

  return res
    .status(error.statusCode)
    .json(new ApiResponse(error.statusCode, null, error.message));
};

export default globalErrorHandler;
