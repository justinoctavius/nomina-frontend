import { colors } from '../../constants/themes/colors';
import { StyleSheet } from '../../types/css-types';
import { NavigationOption } from '../navigation-option';
import { MdWork } from 'react-icons/md';
import { IoIosBusiness } from 'react-icons/io';
import { BsFillFilePersonFill } from 'react-icons/bs';
import Illustration from '../../assets/images/illustration.png';

export const positions = [
  {
    icon: <BsFillFilePersonFill color={'#fff'} />,
    title: 'Empleados',
  },
  {
    icon: <MdWork color={'#fff'} />,
    title: 'Posiciones',
  },
  {
    icon: <IoIosBusiness color={'#fff'} />,
    title: 'Departamentos',
  },
];

export const NavigationSection = () => {
  return (
    <div className="py-4" style={styles.container}>
      <h1 className="text-2xl pb-4" style={styles.h1}>
        Nomina
      </h1>
      <div className="flex justify-center pb-4">
        <div style={styles.image}>
          <img src={Illustration} />
        </div>
      </div>

      <div>
        {positions.map((position, index) => (
          <NavigationOption
            key={`navigation-option-${index}`}
            icon={position.icon}
            onClick={() => {}}
            selected={false}
            title={position.title}
          />
        ))}
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  container: {
    backgroundColor: colors.primary,
    height: '100vh',
    width: '15rem',
    justifyContent: 'center',
  },
  h1: {
    color: colors.light,
    textAlign: 'center',
  },
  image: {
    border: '1px solid',
    borderColor: colors.light,
    width: 100,
    height: '100%',
    borderRadius: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
  },
};
