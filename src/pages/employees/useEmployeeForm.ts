import { useState } from 'react';
import { useCreateEmployee } from '../../hooks/mutations/employees/useCreateEmployee';

export const useEmployeeForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [positionId, setPositionId] = useState('');
  const [email, setEmail] = useState('');
  const [nationalId, setNationalId] = useState('');

  const { createEmployeeMutation } = useCreateEmployee();

  const onFirstNameChange = (value: string) => {
    setFirstName(value);
  };

  const onLastNameChange = (value: string) => {
    setLastName(value);
  };

  const onDepartmentIdChange = (id: string) => {
    setDepartmentId(id);
  };

  const onPositionIdChange = (id: string) => {
    setPositionId(id);
  };

  const onEmailChange = (value: string) => {
    setEmail(value);
  };

  const onNationalIdChange = (value: string) => {
    setNationalId(value);
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setDepartmentId('');
    setPositionId('');
    setEmail('');
    setNationalId('');
  };

  const onAddEmployee = async () => {
    if (!validateForm()) return;

    await createEmployeeMutation.mutateAsync({
      firstName,
      lastName,
      departmentId,
      positionId,
      email,
      nationalId,
    });

    resetForm();
  };

  const validateForm = () => {
    return (
      firstName.length > 0 &&
      lastName.length > 0 &&
      departmentId.length > 0 &&
      positionId.length > 0 &&
      email.length > 0 &&
      nationalId.length > 0
    );
  };

  return {
    firstName,
    lastName,
    departmentId,
    positionId,
    email,
    nationalId,
    onFirstNameChange,
    onLastNameChange,
    onDepartmentIdChange,
    onPositionIdChange,
    onEmailChange,
    onNationalIdChange,
    validateForm,
    onAddEmployee,
  };
};
