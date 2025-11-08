import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { JSX } from 'react';
import { RootState } from '../../store';
import { useAuth } from '../../hooks/useAuth';

interface Props {
  isPrivate?: boolean;
  children: JSX.Element;
}

 /**
 * AuthenticatedRouteComponent
 *
 * Componente de React que envuelve rutas protegidas y maneja la autorización.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido que se renderiza dentro de la ruta.
 * @param {boolean} [props.isPrivate=false] - Indica si la ruta requiere autenticación.
 *
 */
const AuthenticatedRouteComponent: React.FC<Props> = ({ children, isPrivate = false}) => {
  const authenticated = useSelector((state: RootState) => state.authState);
  const {logout} = useAuth();

  if(!authenticated.token) {
    logout();
  }
  
  console.log('AuthenticatedRouteComponent rendered. isPrivate:', isPrivate, 'authenticated:', authenticated);
  if (isPrivate) {
    return authenticated.isAuthenticated ? children : <Navigate to="/auth" replace />;
  } else {
    if (!authenticated.isAuthenticated) {
      logout();
    }
    return authenticated.isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
  }
};

export default AuthenticatedRouteComponent;
