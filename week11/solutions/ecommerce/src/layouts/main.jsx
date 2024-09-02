import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
const MainLayout = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  return (
    <>
      <Header cart={cart} />
      <div className='container mx-auto'>
        <Outlet context={{ cart, setCart }} />
      </div>
    </>
  );
};
export default MainLayout;
