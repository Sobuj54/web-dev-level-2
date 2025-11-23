import { NextFunction, Request, Response } from 'express';
import { User } from '../app/users/user.model';
import ApiError from '../utils/ApiError';
import { asyncHandler } from '../utils/asyncHandler';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

export const verifyAuthentication = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) throw new ApiError(401, 'Unauthorized');

  const decodedToken: JwtPayload = jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET as Secret
  ) as JwtPayload;

  const user = await User.findById(decodedToken.id);
  if (!user) throw new ApiError(401, 'Invalid user');

  req.user = user;
  next();
});

export const verifyAuthorization =
  (...roles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!roles.includes(req.user.role)) {
        throw new ApiError(403, 'Forbidden.');
      }
      next();
    } catch (error) {
      next(error);
    }
  };
