import { Model } from 'mongoose';

interface IAcademicSemester {
  title: string;
  year: number;
  code: string;
  startMonth: string;
  endMonth: string;
}

interface AcademicModelType extends Model<IAcademicSemester> {
  myMethod(): void;
}

export { IAcademicSemester, AcademicModelType };
