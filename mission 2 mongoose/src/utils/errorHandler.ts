// errorHandler.ts
import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;
