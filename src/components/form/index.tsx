import { Props } from './types';

export const Form = ({ title, children }: Props) => {
  return (
    <div className="shadow-md p-4">
      <p className="text-xl font-bold">{title}</p>
      <div className="flex gap-4 p-4 flex-wrap">{children}</div>
    </div>
  );
};
