import { DataTable } from '../data-table/data-table';
import { positionColumns } from './columns';

export const PositionTable = () => {
  const data = [
    {
      id: '1',
      name: 'hola',
      description: 'hola 2',
      salaryPerHour: 300,
    },
    {
      id: '2',
      name: 'pepe',
      description: 'hola 2',
      salaryPerHour: 300,
    },
  ];

  return (
    <DataTable
      columns={positionColumns}
      data={data}
      filterColumn="name"
      filterPlaceHolder="Filtrar por nombre..."
    />
  );
};
