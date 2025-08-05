import { Model } from 'mongoose';

export interface IUser {
  id: string;
  role: string;
  password: string;
}

export interface UserModelType extends Model<IUser> {
  myStaticMethod(): void;
}
