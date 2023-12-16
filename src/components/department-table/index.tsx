import { useDeleteDepartment } from '../../hooks/mutations/departments/useDeleteDepartment';
import { useGetDepartments } from '../../hooks/queries/departments/useGetDepartments';
import { DataTable } from '../data-table/data-table';
import { useGetDepartmentsColumn } from './columns';

export const DepartmentTable = () => {
  const { data, isLoading } = useGetDepartments();
  const { deletePositionMutation } = useDeleteDepartment();
  const departmentColumns = useGetDepartmentsColumn({
    onDelete: (id) => deletePositionMutation.mutateAsync(id),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <DataTable
      columns={departmentColumns}
      data={data || []}
      filterColumn="name"
      filterPlaceHolder="Filtrar por nombre..."
    />
  );
};
