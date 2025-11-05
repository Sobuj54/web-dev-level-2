import { Model } from 'mongoose';

export type paginationOptionsType = {
  page: number;
  limit: number;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
};

export type IGenericResponse<T> = {
  page: number;
  limit: number;
  total: number;
  data: T[];
};

export type filterOptionsType = {
  searchTerm?: string;
  title?: string;
  code?: string;
  year?: string;
};

export type MonthName =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

interface IAcademicSemester {
  title: 'Autum' | 'summer' | 'fall';
  year: string;
  code: '01' | '02' | '03';
  startMonth: MonthName;
  endMonth: MonthName;
}

interface AcademicModelType extends Model<IAcademicSemester> {
  myMethod(): void;
}

export { IAcademicSemester, AcademicModelType };
