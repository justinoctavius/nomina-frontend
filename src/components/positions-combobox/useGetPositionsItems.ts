import { useEffect, useState } from 'react';
import { Data } from '../combo-box/types';
import { useGetPositions } from '../../hooks/queries/positions/useGetPositions';
import { Position } from '../../services/positions/types';

export const useGetPositionsItems = () => {
  const [items, setItems] = useState<Data[]>([]);
  const { data } = useGetPositions();

  const itemsMapper = (data: Position) => {
    return {
      value: data.id,
      label: data.name,
    };
  };

  useEffect(() => {
    if (data) {
      setItems(data.map(itemsMapper));
    }
  }, [data]);

  return { items };
};
