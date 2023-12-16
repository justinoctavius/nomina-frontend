import { useDeleteEmployee } from '../../hooks/mutations/employees/useDeleteDepartment';
import { useGetEmployees } from '../../hooks/queries/employees/useGetEmployees';
import { DataTable } from '../data-table/data-table';
import { useGetEmployeesColumn } from './columns';

export const EmployeeTable = () => {
  const { data, isLoading } = useGetEmployees();
  const { deleteEmployeeMutation } = useDeleteEmployee();
  const employeesColumns = useGetEmployeesColumn({
    onDelete: (id) => deleteEmployeeMutation.mutateAsync(id),
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
