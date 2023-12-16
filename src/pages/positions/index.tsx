import { Button } from '../../components/button';
import { Form } from '../../components/form';
import { Input } from '../../components/input';
import { PositionTable } from '../../components/position-table';
import { usePositionForm } from './usePositionForm';

export const Positions = () => {
  const {
    description,
    name,
    salaryPerHour,
    onAddPosition,
    onDescriptionChange,
    onNameChange,
    onSalaryChange,
    validateForm,
  } = usePositionForm();

  return (
    <div className="p-4">
      <Form title="Agregar nueva posición">
        <div className="flex gap-4 p-4">
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre"
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
            <Input
              type="number"
              name="salaryPerHour"
              id="salaryPerHour"
              placeholder="Salario por hora"
              value={salaryPerHour}
              onChange={(event) => onSalaryChange(Number(event.target.value))}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Button
              type="submit"
              onClick={onAddPosition}
              disabled={!validateForm()}
            >
              Agregar
            </Button>
          </div>
        </div>
      </Form>
      <div className="mt-4 shadow-md p-4">
        <PositionTable />
      </div>
    </div>
  );
};
