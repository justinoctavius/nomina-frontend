import { useQuery } from 'react-query';
import { getDepartments } from '../../../services/departments/departments.service';

export const DEPARTMENT_QUERY_KEY = '/departments';

export const useGetDepartments = () => {
  const { isLoading, error, data } = useQuery(
    DEPARTMENT_QUERY_KEY,
    getDepartments
  );

  return {
    isLoading,
    error,
    data,
  };
};
