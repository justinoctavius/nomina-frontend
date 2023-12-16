import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { ActionColumnItem } from '../action-column-item';
import { Position } from '../../services/positions/types';
import { Department } from '../../services/departments/types';
import { formatNationalId } from '../../utils/strings';
import { Employee } from '../../services/employees/types';

const employeesColumns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => {
      const id: string = row.getValue('id');
      return <span>{id.slice(0, 8)}...</span>;
    },
  },
  {
    accessorKey: 'firstName',
    header: 'Nombre(s)',
  },
  {
    accessorKey: 'lastName',
    header: 'Apellido(s)',
  },
  {
    accessorKey: 'nationalId',
    header: 'Cédula',
    cell: ({ row }) => {
      const nationalId: string = row.getValue('nationalId');
      return <span>{formatNationalId(nationalId || '')}</span>;
    },
  },
  {
    accessorKey: 'email',
    header: 'Correo electrónico',
  },
  {
    accessorKey: 'position',
    header: 'Posición',
    cell: ({ row }) => {
      const position: Position = row.getValue('position');
      return <span>{position.name}</span>;
    },
  },
  {
    accessorKey: 'department',
    header: 'Departamento',
    cell: ({ row }) => {
      const department: Department = row.getValue('department');
      return <span>{department.name}</span>;
    },
  },
];

export const useGetEmployeesColumn = (actions: {
  onDelete: (id: string) => void;
}) => {
  const actionColumn: ColumnDef<Employee> = useMemo(
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

  return [...employeesColumns, actionColumn];
};
