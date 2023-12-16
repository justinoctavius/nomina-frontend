import { useMutation } from 'react-query';
import { queryClient } from '../../../App';
import { EMPLOYEES_QUERY_KEY } from '../../queries/employees/useGetEmployees';
import { createEmployee } from '../../../services/employees/employees.service';

export const useCreateEmployee = () => {
  const createEmployeeMutation = useMutation(createEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries(EMPLOYEES_QUERY_KEY);
    },
  });

  return {
    createEmployeeMutation,
  };
};
