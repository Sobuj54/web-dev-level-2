/* eslint-disable no-unused-vars */
import { Document, Model, Types } from 'mongoose';
import { IStudent } from '../student/student.interface';

export interface IUser {
  id: string;
  role: string;
  password: string;
  needsPasswordChange: boolean;
  refreshToken: string;
  student: Types.ObjectId | IStudent;
  faculty: Types.ObjectId;
  admin: Types.ObjectId;
}

export interface IUserMethods {
  isPasswordCorrect(password: string): Promise<boolean>;
  generateAccessToken(): string;
  generateRefreshToken(): string;
}

export type UserDocument = IUser & IUserMethods & Document;

export interface UserModelType extends Model<UserDocument> {}
