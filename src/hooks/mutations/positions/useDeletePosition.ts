import { useMutation } from 'react-query';
import { deletePosition } from '../../../services/positions/positions.service';
import { queryClient } from '../../../App';
import { POSITIONS_QUERY_KEY } from '../../queries/positions/useGetPositions';

export const useDeletePosition = () => {
  const deletePositionMutation = useMutation(deletePosition, {
    onSuccess: () => {
      queryClient.invalidateQueries(POSITIONS_QUERY_KEY);
    },
  });

  return {
    deletePositionMutation,
  };
};
