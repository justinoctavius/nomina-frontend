import { Combobox } from '../combo-box';
import { Props } from './types';
import { useGetPositionsItems } from './useGetPositionsItems';

export const PositionsComboBox = ({ onSelect, selected }: Props) => {
  const { items } = useGetPositionsItems();

  return (
    <Combobox
      data={items}
      label="Posiciones"
      onSelect={onSelect}
      selected={selected}
      searchPlaceholder="Buscar posiciones..."
    />
  );
};
