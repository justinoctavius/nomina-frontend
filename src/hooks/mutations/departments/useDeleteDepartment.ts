import { useMutation } from 'react-query';
import { queryClient } from '../../../App';
import { DEPARTMENT_QUERY_KEY } from '../../queries/departments/useGetDepartments';
import { deleteDepartment } from '../../../services/departments/departments.service';

export const useDeleteDepartment = () => {
  const deletePositionMutation = useMutation(deleteDepartment, {
    onSuccess: () => {
      queryClient.invalidateQueries(DEPARTMENT_QUERY_KEY);
    },
  });

  return {
    deletePositionMutation,
  };
};
