import { Button } from '../../components/button';
import { DepartmentTable } from '../../components/department-table';
import { Form } from '../../components/form';
import { Input } from '../../components/input';
import { useDepartmentsForm } from './useDepartmentsForm';

export const Departments = () => {
  const {
    description,
    name,
    onAddDepartment,
    onDescriptionChange,
    onNameChange,
    validateForm,
  } = useDepartmentsForm();

  return (
    <div className="p-4">
      <Form title="Agregar nuevo departamento">
        <div className="flex gap-4 p-4">
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre*"
              value={name}
              onChange={(event) => onNameChange(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              name="description"
              id="description"
              placeholder="Descripción"
              value={description}
              onChange={(event) => onDescriptionChange(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Button
              type="submit"
              onClick={onAddDepartment}
              disabled={!validateForm()}
            >
              Agregar
            </Button>
          </div>
        </div>
      </Form>
      <div className="mt-4 shadow-md p-4">
        <DepartmentTable />
      </div>
    </div>
  );
};
