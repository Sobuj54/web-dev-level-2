import { Model, Types } from 'mongoose';
import { IStudent } from '../student/student.interface';

export interface IUser {
  id: string;
  role: string;
  password: string;
  student: Types.ObjectId | IStudent;
  faculty: Types.ObjectId;
  admin: Types.ObjectId;
}

export interface UserModelType extends Model<IUser> {
  myStaticMethod(): void;
}
