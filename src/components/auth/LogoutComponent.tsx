import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const LogoutComponent = () => {
  const { logout } = useAuth()    
  const navigate = useNavigate()
  
  const handleLogout = useCallback(() => {
    logout()
    navigate('/auth')
  }, [])
  
   return (
    <IconButton onClick={handleLogout}><LogoutIcon /> </IconButton>
  )
}
