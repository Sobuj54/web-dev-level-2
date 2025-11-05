import { MonthName } from './academicSemester.interface';

export const months: MonthName[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const semesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Summer: '01',
  Autumn: '02',
  Fall: '03',
};
