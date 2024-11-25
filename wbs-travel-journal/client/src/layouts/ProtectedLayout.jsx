import { useAuth } from '@/context';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedLayout = () => {
  const { user, loading } = useAuth();
  const location = useLocation();
  return (
    <>
      {!loading && (
        <>{user ? <Outlet /> : <Navigate to='/login' state={{ next: location.pathname }} />}</>
      )}
    </>
  );
};

export default ProtectedLayout;
