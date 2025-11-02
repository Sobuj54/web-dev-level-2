interface IGenericValidationError {
  path: string;
  message: string;
}

interface IGenericError {
  statusCode: number;
  message: string;
  error: unknown;
  stack?: string;
}

export { IGenericValidationError, IGenericError };
