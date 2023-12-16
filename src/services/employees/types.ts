import { Department } from '../departments/types';
import { Position } from '../positions/types';

export interface CreateEmployeeDto {
  firstName: string;
  lastName: string;
  nationalId: string;
  email: string;
  positionId: string;
  departmentId: string;
}

export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  nationalId: string;
  email: string;
  position: Position;
  department: Department;
};
