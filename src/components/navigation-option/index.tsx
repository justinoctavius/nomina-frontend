import { colors } from '../../constants/themes/colors';
import { StyleSheet } from '../../types/css-types';
import { Props } from './types';

export const NavigationOption = ({
  title,
  icon,
  onClick,
  selected = true,
}: Props) => {
  return (
    <div
      className="p-4 flex gap-2 justify-center place-items-center cursor-pointer"
      style={selected ? styles.selected : styles.default}
      onClick={onClick}
    >
      <div>{icon}</div>
      <p className="text-base text-white font-bold">{title}</p>
    </div>
  );
};

const styles: StyleSheet = {
  selected: {
    backgroundColor: colors.secondary + '40',
  },
  default: {},
};
