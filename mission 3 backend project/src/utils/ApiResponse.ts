// utils/ApiResponse.ts

export default class ApiResponse<T = unknown, E = unknown> {
  statusCode: number;
  data: T | null;
  message: string;
  success: boolean;
  errors?: E[];

  constructor(
    statusCode: number,
    data: T | null,
    message: string = 'Success',
    errors?: E[]
  ) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
    if (errors) this.errors = errors;
  }
}
