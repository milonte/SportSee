import './styles/app.scss';
import { Outlet } from 'react-router-dom';
import TopBar from './components/TopBar';
import LeftBar from './components/LeftBar';

/**
 * Default App function
 */
export default function App() {

  return (
    <div className="main">
      <TopBar />
      <LeftBar />
      <Outlet />
    </div>
  );
}
