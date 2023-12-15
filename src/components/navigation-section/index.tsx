import { colors } from '../../constants/themes/colors';
import { StyleSheet } from '../../types/css-types';
import { NavigationOption } from '../navigation-option';
import { MdWork } from 'react-icons/md';
import { IoIosBusiness } from 'react-icons/io';
import { BsFillFilePersonFill } from 'react-icons/bs';
import Illustration from '../../assets/images/illustration.png';
import { useLocation } from 'react-router-dom';

export const positions = [
  {
    icon: <BsFillFilePersonFill color={'#fff'} />,
    title: 'Empleados',
    to: '/',
  },
  {
    icon: <MdWork color={'#fff'} />,
    title: 'Posiciones',
    to: '/positions',
  },
  {
    icon: <IoIosBusiness color={'#fff'} />,
    title: 'Departamentos',
    to: '/departments',
  },
];

export const NavigationSection = () => {
  const { pathname } = useLocation();

  return (
    <div className="py-4" style={styles.container}>
      <h1 className="text-2xl my-4" style={styles.h1}>
        Nomina
      </h1>
      <div className="flex justify-center my-8">
        <div style={styles.image}>
          <img src={Illustration} />
        </div>
      </div>

      <div>
        {positions.map((position, index) => (
          <NavigationOption
            key={`navigation-option-${index}`}
            icon={position.icon}
            to={position.to}
            selected={pathname === position.to}
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
    width: '14rem',
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
