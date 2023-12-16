import { Combobox } from '../combo-box';
import { Props } from './types';
import { useGetDepartmentsItems } from './useGetDepartmentsItems';

export const DepartmentComboBox = ({ onSelect, selected }: Props) => {
  const { items } = useGetDepartmentsItems();

  return (
    <Combobox
      data={items}
      label="Departamentos"
      onSelect={onSelect}
      selected={selected}
      searchPlaceholder="Buscar departamento..."
    />
  );
};
