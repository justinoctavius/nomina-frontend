import { httpClient } from '../../utils/http-client';
import { CreateEmployeeDto, Employee } from './types';

export const createEmployee = async (employee: CreateEmployeeDto) => {
  const response = await httpClient.post('/employees', employee);
  return response.data;
};

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await httpClient.get('/employees');
  return response.data;
};

export const deleteEmployee = async (id: string) => {
  const response = await httpClient.delete(`/employees/${id}`);
  return response.data;
};
