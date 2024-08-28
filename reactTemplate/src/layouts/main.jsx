import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
  return (
    <>
      <Header />
      <div className='container mx-auto'>
        <Outlet />
      </div>
    </>
  );
};
export default MainLayout;
