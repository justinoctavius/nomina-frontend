import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { ActionColumnItem } from '../action-column-item';
import { formatNumber } from '../../utils/numbers';

export type Position = {
  id: string;
  salaryPerHour: number;
  name: string;
  description?: string;
};

export const positionColumns: ColumnDef<Position>[] = [
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
    accessorKey: 'salaryPerHour',
    header: 'Salario por hora',
    cell: ({ row }) => {
      const salaryPerHour: number = row.getValue('salaryPerHour');
      return <span>RD$ {formatNumber(salaryPerHour)}</span>;
    },
  },
  {
    accessorKey: 'description',
    header: 'Descripcion',
  },
];

export const useGetPositionsColumn = (actions: {
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

  return [...positionColumns, actionColumn];
};
