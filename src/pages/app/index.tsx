import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../dashboard';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
