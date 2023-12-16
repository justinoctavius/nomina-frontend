import { useMutation } from 'react-query';
import { queryClient } from '../../../App';
import { createDepartment } from '../../../services/departments/departments.service';
import { DEPARTMENT_QUERY_KEY } from '../../queries/departments/useGetDepartments';

export const useCreateDepartments = () => {
  const createDepartmentsMutation = useMutation(createDepartment, {
    onSuccess: () => {
      queryClient.invalidateQueries(DEPARTMENT_QUERY_KEY);
    },
  });

  return {
    createDepartmentsMutation,
  };
};
