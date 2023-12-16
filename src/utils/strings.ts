export const formatNationalId = (num: string): string => {
  const numStr = num;

  if (numStr.length !== 11) {
    return 'Invalid input. Number must have exactly 11 digits.';
  }

  return `${numStr.slice(0, 3)}-${numStr.slice(3, 10)}-${numStr.slice(10)}`;
};
