import { Props } from './types';

export const Form = ({ title, children }: Props) => {
  return (
    <div className="shadow-xl p-4">
      <p className="text-xl font-bold">{title}</p>
      <div className="flex gap-4 p-4">{children}</div>
    </div>
  );
};