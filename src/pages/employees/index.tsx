import { Button } from '../../components/button';
import { DepartmentComboBox } from '../../components/department-combobox';
import { EmployeeTable } from '../../components/employee-table';
import { Form } from '../../components/form';
import { Input } from '../../components/input';
import { PositionsComboBox } from '../../components/positions-combobox';
import { useEmployeeForm } from './useEmployeeForm';

export const Employees = () => {
  const {
    departmentId,
    positionId,
    nationalId,
    email,
    firstName,
    lastName,
    validateForm,
    onAddEmployee,
    onDepartmentIdChange,
    onEmailChange,
    onFirstNameChange,
    onLastNameChange,
    onNationalIdChange,
    onPositionIdChange,
  } = useEmployeeForm();

  return (
    <div className="p-4">
      <Form title="Agregar nuevo empleado">
        <div className="flex gap-4 p-4 flex-wrap">
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Nombre(s)*"
              value={firstName}
              onChange={(event) => onFirstNameChange(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Apellido(s)*"
              value={lastName}
              onChange={(event) => onLastNameChange(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              name="national_id"
              id="national_id"
              placeholder="Cédula*"
              value={nationalId}
              onChange={(event) => onNationalIdChange(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="Correo electrónico*"
              value={email}
              onChange={(event) => onEmailChange(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <PositionsComboBox
              onSelect={onPositionIdChange}
              selected={positionId}
            />
          </div>
          <div className="flex flex-col gap-2">
            <DepartmentComboBox
              onSelect={onDepartmentIdChange}
              selected={departmentId}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Button
              type="submit"
              disabled={!validateForm()}
              onClick={onAddEmployee}
            >
              Agregar
            </Button>
          </div>
        </div>
      </Form>
      <div className="mt-4 shadow-md p-4">
        <EmployeeTable />
      </div>
    </div>
  );
};
