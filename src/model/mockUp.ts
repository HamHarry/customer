export interface MockUp {
  employee: Employee;
  timeAttendances: TimeAttendance[];
  summary: Summary;
}

export interface Employee {
  _id: string;
  code: string;
  email: string;
  title: Title;
  firstName: string;
  lastName: string;
  nickname: string;
  gender: string;
  personalType: string;
  phoneNumber: string;
  image: string;
}

export interface Title {
  nameEn: string;
  name: string;
  _id: string;
}

export interface Summary {
  late: number;
  early: number;
  onTime: number;
  leave: number;
  absent: number;
  workAbsent: number;
}

export interface TimeAttendance {
  _id: string;
  workDate: string;
  status: Status[];
  score: number;
}

export enum Status {
  ABSENT = "abent",
  LATE = "late",
  ON_TIME = "onTime",
}
