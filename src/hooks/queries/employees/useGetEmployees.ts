import { useQuery } from 'react-query';
import { getEmployees } from '../../../services/employees/employees.service';

export const EMPLOYEES_QUERY_KEY = '/employees';

export const useGetEmployees = () => {
  const { isLoading, error, data } = useQuery(
    EMPLOYEES_QUERY_KEY,
    getEmployees
  );

  return {
    isLoading,
    error,
    data,
  };
};
