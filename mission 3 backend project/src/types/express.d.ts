// src/types/express.d.ts

import { UserDocument } from '../app/users/user.interface';

declare global {
  namespace Express {
    interface Request {
      user: UserDocument; // optional; or `user: User` if always present after auth
    }
  }
}

export {};
