import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from 'entities/user/model/useUserStore';

export const ProtectedRoute = () => {
  const { isAuthenticated, user } = useUserStore();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};