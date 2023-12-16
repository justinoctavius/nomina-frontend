import { useEffect, useState } from 'react';
import { useGetDepartments } from '../../hooks/queries/departments/useGetDepartments';
import { Department } from '../../services/departments/types';
import { Data } from '../combo-box/types';

export const useGetDepartmentsItems = () => {
  const [items, setItems] = useState<Data[]>([]);
  const { data } = useGetDepartments();

  const itemsMapper = (data: Department) => {
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
