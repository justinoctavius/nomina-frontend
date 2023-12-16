import { httpClient } from '../../utils/http-client';
import { CreateDepartmentDto, Department } from './types';

export const getDepartments = async (): Promise<Department> => {
  const response = await httpClient.get('/departments');
  return response.data;
};

export const createDepartment = async (department: CreateDepartmentDto) => {
  const response = await httpClient.post('/departments', department);
  return response.data;
};

export const deleteDepartment = async (id: string) => {
  const response = await httpClient.delete(`/departments/${id}`);
  return response.data;
};
