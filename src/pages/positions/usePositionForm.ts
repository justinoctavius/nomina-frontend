import { useState } from 'react';
import { useCreatePosition } from '../../hooks/mutations/positions/useCreatePosition';

export const usePositionForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [salaryPerHour, setSalaryPerHour] = useState(0);

  const { createPositionMutation } = useCreatePosition();

  const onNameChange = (name: string) => {
    setName(name);
  };
  const onDescriptionChange = (description: string) => {
    setDescription(description);
  };
  const onSalaryChange = (salary: number) => {
    setSalaryPerHour(salary);
  };

  const validateForm = () => {
    if (!name) {
      return false;
    }
    if (!salaryPerHour) {
      return false;
    }
    return true;
  };

  const onAddPosition = async () => {
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    await createPositionMutation.mutateAsync({
      name,
      description,
      salaryPerHour,
    });
  };

  return {
    onNameChange,
    onDescriptionChange,
    onSalaryChange,
    onAddPosition,
    validateForm,
    name,
    description,
    salaryPerHour,
  };
};
