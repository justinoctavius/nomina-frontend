import { useGetPositions } from '../../hooks/queries/positions/useGetPositions';
import { DataTable } from '../data-table/data-table';
import { positionColumns } from './columns';

export const PositionTable = () => {
  const { data, isLoading } = useGetPositions();

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
