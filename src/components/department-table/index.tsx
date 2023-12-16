import { DataTable } from '../data-table/data-table';
import { departmentColumns } from './columns';

export const DepartmentTable = () => {
  const data = [
    {
      id: '1',
      name: 'hola',
      description: 'hola 2',
    },
    {
      id: '2',
      name: 'pepe',
      description: 'hola 2',
    },
  ];

  return (
    <DataTable
      columns={departmentColumns}
      data={data}
      filterColumn="name"
      filterPlaceHolder="Filtrar por nombre..."
    />
  );
};
