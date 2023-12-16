import { Button } from '../../components/button';
import { Form } from '../../components/form';
import { Input } from '../../components/input';

export const Employees = () => {
  return (
    <div className="p-4">
      <Form title="Agregar nuevo empleado">
        <div className="flex gap-4 p-4">
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Primer nombre"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Apellidos"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              name="national_id"
              id="national_id"
              placeholder="Cédula"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="Correo electrónico"
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
