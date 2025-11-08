import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';


/**
 * LogoutComponent
 *
 * Componente de React que maneja el cierre de sesión del usuario.
 * Al ejecutarse, limpia los datos de autenticación y redirige si es necesario.
 *
 */
export const LogoutComponent = () => {
  const { logout } = useAuth();    
  const navigate = useNavigate();
  
  const handleLogout = useCallback(() => {
    logout();
    navigate('/auth');
  }, [])
  
   return (
    <IconButton onClick={handleLogout}><LogoutIcon /> </IconButton>
  )
}
