import { ColumnDef } from '@tanstack/react-table';

export type Position = {
  id: string;
  salaryPerHour: number;
  name: string;
  description?: string;
};

export const columns: ColumnDef<Position>[] = [
  {
    accessorKey: 'salaryPerHour',
    header: 'Salario por hora',
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
