import { Button } from '../../components/button';
import { Form } from '../../components/form';
import { Input } from '../../components/input';

export const Departments = () => {
  return (
    <div className="p-4">
      <Form title="Agregar nuevo departamento">
        <div className="flex gap-4 p-4">
          <div className="flex flex-col gap-2">
            <Input type="text" name="name" id="name" placeholder="Nombre" />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              name="description"
              id="description"
              placeholder="Descripción"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Button type="submit">Agregar</Button>
          </div>
        </div>
      </Form>
      <div></div>
    </div>
  );
};
