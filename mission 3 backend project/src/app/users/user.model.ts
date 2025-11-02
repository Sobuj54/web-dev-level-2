import mongoose, { Schema } from 'mongoose';
import { IUser, UserModelType } from './user.interface';

const userSchema = new Schema<IUser, UserModelType>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser, UserModelType>('User', userSchema);
