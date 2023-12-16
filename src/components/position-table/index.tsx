import { useDeletePosition } from '../../hooks/mutations/positions/useDeletePosition';
import { useGetPositions } from '../../hooks/queries/positions/useGetPositions';
import { DataTable } from '../data-table/data-table';
import { useGetPositionsColumn } from './columns';

export const PositionTable = () => {
  const { data, isLoading } = useGetPositions();
  const { deletePositionMutation } = useDeletePosition();
  const positionColumns = useGetPositionsColumn({
    onDelete: (id) => deletePositionMutation.mutateAsync(id),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <DataTable
      columns={positionColumns}
      data={data || []}
      filterColumn="name"
      filterPlaceHolder="Filtrar por nombre..."
    />
  );
};
