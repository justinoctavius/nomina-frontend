import { ColumnDef } from '@tanstack/react-table';
import { ActionColumnItem } from '../action-column-item';
import { useMemo } from 'react';

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
];

export const useGetDepartmentsColumn = (actions: {
  onDelete: (id: string) => void;
}) => {
  const actionColumn: ColumnDef<Position> = useMemo(
    () => ({
      accessorKey: 'id',
      header: 'Acciones',
      cell: ({ row }) => {
        const id: string = row.getValue('id');
        return <ActionColumnItem onDelete={() => actions.onDelete(id)} />;
      },
    }),
    []
  );

  return [...departmentColumns, actionColumn];
};
