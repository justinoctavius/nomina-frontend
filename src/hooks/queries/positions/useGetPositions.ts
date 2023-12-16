import { useQuery } from 'react-query';
import { getPosition } from '../../../services/positions/positions.service';

export const POSITIONS_QUERY_KEY = '/positions';

export const useGetPositions = () => {
  const { isLoading, error, data } = useQuery(POSITIONS_QUERY_KEY, getPosition);

  return {
    isLoading,
    error,
    data,
  };
};
