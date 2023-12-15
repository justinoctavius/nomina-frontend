import { Route, Routes } from 'react-router-dom';
import { NavigationSection } from '../../components/navigation-section';
import { Positions } from '../positions';
import { Departments } from '../departments';
import { Employees } from '../employees';

export const Dashboard = () => {
  return (
    <main className="flex">
      <div>
        <NavigationSection />
      </div>
      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/departments" element={<Departments />} />
      </Routes>
    </main>
  );
};
