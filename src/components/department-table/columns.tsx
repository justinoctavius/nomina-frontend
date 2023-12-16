import { ColumnDef } from '@tanstack/react-table';
import { ActionColumnItem } from '../action-column-item';

export type Position = {
  id: string;
  name: string;
  description?: string;
};

export const departmentColumns: ColumnDef<Position>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => {
      const id: string = row.getValue('id');
      return <span>{id.slice(0, 8)}...</span>;
    },
  },
  {
    accessorKey: 'name',
    header: 'Nombre',
  },
  {
    accessorKey: 'description',
    header: 'Descripcion',
  },
  {
    accessorKey: 'id',
    header: 'Acciones',
    cell: ({ row }) => {
      const id = row.getValue('id');
      return <ActionColumnItem onDelete={() => console.log(id)} />;
    },
  },
];
