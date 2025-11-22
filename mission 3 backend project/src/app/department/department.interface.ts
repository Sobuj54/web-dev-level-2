import { Document, Types } from 'mongoose';

export interface IDepartment {
  title: string;
  faculty: Types.ObjectId;
}

export type DepartmentDocument = IDepartment & Document;
