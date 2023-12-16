import { useMutation } from 'react-query';
import { queryClient } from '../../../App';
import { EMPLOYEES_QUERY_KEY } from '../../queries/employees/useGetEmployees';
import { deleteEmployee } from '../../../services/employees/employees.service';

export const useDeleteEmployee = () => {
  const deleteEmployeeMutation = useMutation(deleteEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries(EMPLOYEES_QUERY_KEY);
    },
  });

  return {
    deleteEmployeeMutation,
  };
};
