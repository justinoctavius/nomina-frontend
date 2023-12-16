import { useState } from 'react';
import { useCreateDepartments } from '../../hooks/mutations/departments/useCreateDepartments';

export const useDepartmentsForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const { createDepartmentsMutation } = useCreateDepartments();

  const onNameChange = (name: string) => {
    setName(name);
  };
  const onDescriptionChange = (description: string) => {
    setDescription(description);
  };

  const validateForm = () => {
    if (!name) {
      return false;
    }
    return true;
  };

  const onAddDepartment = async () => {
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    await createDepartmentsMutation.mutateAsync({
      name,
      description,
    });
  };

  return {
    onNameChange,
    onDescriptionChange,
    onAddDepartment,
    validateForm,
    name,
    description,
  };
};
