import mongoose from 'mongoose';
import { IGenericError, IGenericValidationError } from '../interfaces/error';

const mongooseValidationError = (
  err: mongoose.Error.ValidationError
): IGenericError => {
  const errors: IGenericValidationError[] = Object.values(
    (err as mongoose.Error.ValidationError).errors
  ).map((e) => {
    return { path: e?.path, message: e?.message };
  });
  return {
    statusCode: 400,
    message: 'Validation Error',
    error: errors,
  };
};

export { mongooseValidationError };
