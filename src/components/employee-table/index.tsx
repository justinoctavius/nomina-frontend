import { useDeletePosition } from '../../hooks/mutations/positions/useDeletePosition';
import { useGetEmployees } from '../../hooks/queries/employees/useGetEmployees';
import { DataTable } from '../data-table/data-table';
import { useGetEmployeesColumn } from './columns';

export const EmployeeTable = () => {
  const { data, isLoading } = useGetEmployees();
  const { deletePositionMutation } = useDeletePosition();
  const employeesColumns = useGetEmployeesColumn({
    onDelete: (id) => deletePositionMutation.mutateAsync(id),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <DataTable
      columns={employeesColumns}
      data={data || []}
      filterColumn="name"
      filterPlaceHolder="Filtrar por nombre..."
    />
  );
};
