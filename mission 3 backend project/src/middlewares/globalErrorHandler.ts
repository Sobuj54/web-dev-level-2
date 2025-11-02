/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';
import ApiError from '../utils/ApiError';
import { logError } from '../shared/logger';
import { IGenericError } from '../interfaces/error';
import { mongooseValidationError } from '../utils/validationErrorHandler';
import ApiResponse from '../utils/ApiResponse';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let error: IGenericError;

  if (err instanceof ApiError) {
    error = err;
  } else if (err.name === 'ValidationError') {
    error = mongooseValidationError(err);
  } else {
    error = {
      message: err.message || 'Something went wrong',
      statusCode: err.statusCode || 500,
      error: err?.error,
      stack: err?.stack,
    };
  }

  if (process.env.NODE_ENV !== 'development')
    logError(error.message, error.statusCode);

  res
    .status(error.statusCode)
    .json(
      new ApiResponse(
        error.statusCode,
        null,
        error.message,
        error?.error,
        process.env.NODE_ENV == 'development' ? error?.stack : ''
      )
    );
};

export default globalErrorHandler;
