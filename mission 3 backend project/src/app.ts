import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import userRoutes from './app/users/users.routes';
import ApiError from './utils/ApiError';

app.use('/api/v1/users', userRoutes);

// ------------------- Not Found Handler -------------------
// Forward 404 to error handler for consistency
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new ApiError(404, 'Route not found.'));
});

// ------------------- Centralized Error Handler -------------------
import globalErrorHandler from './middlewares/globalErrorHandler';
app.use(globalErrorHandler);

export default app;
