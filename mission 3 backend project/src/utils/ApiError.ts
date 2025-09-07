class ApiError extends Error {
  statusCode: number;
  message: string;
  success: boolean;
  errors: Array<string | Record<string, unknown>>;

  constructor(
    statusCode: number,
    message: string = 'Something went wrong',
    errors: Array<string | Record<string, unknown>> = [],
    stack: string = ''
  ) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
