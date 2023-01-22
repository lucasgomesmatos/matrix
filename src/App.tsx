import { Content } from './components/content';
import { Header } from './components/header';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="grid">
      <Header />
      <Outlet />
    </div>
  );
};
