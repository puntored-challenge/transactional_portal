import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { JSX } from 'react';
import { RootState } from '../../store';
import { useAuth } from '../../hooks/useAuth';

interface Props {
  isPrivate?: boolean;
  children: JSX.Element;
}

const AuthenticatedRoute: React.FC<Props> = ({ children, isPrivate = false}) => {
  const isAuthenticated = useSelector((state: RootState) => state.authState.isAuthenticated);
  const {logout} = useAuth();
  console.log('isAuthenticated:', isAuthenticated);
  if (isPrivate) {
    return isAuthenticated ? children : <Navigate to="/auth" replace />;
  } else {
    if (!isAuthenticated) {
      logout();
    }
    return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
  }
};

export default AuthenticatedRoute;
