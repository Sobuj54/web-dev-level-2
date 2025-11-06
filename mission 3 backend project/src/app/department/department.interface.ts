import { Schema } from 'mongoose';

export interface IDepartment {
  title: string;
  faculty: string | Schema.Types.ObjectId;
}
