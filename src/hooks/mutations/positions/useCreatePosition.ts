import { useMutation } from 'react-query';
import { createPosition } from '../../../services/positions/positions.service';
import { queryClient } from '../../../App';
import { POSITIONS_QUERY_KEY } from '../../queries/positions/useGetPositions';

export const useCreatePosition = () => {
  const createPositionMutation = useMutation(createPosition, {
    onSuccess: () => {
      queryClient.invalidateQueries(POSITIONS_QUERY_KEY);
    },
  });

  return {
    createPositionMutation,
  };
};
