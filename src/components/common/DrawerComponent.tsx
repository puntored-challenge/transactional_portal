import { CurrencyExchange, Menu, Search } from '@mui/icons-material';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * DrawerComponent
 *
 * Componente de React que renderiza un drawer (menú lateral deslizable).
 * Se puede usar para navegación o mostrar contenido adicional.
 */
const DrawerComponent = () => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDrawer = (value: boolean) => setOpen(value);

  const ROUTES = [
    { name: "Consultar", path: "/dashboard", icon: <Search /> },
    { name: "Recargar", path: "/dashboard/buy", icon: <CurrencyExchange /> },
  ];

  const handleRedirect = (path: string) => {
    navigate(path);
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
      <List>|
        {ROUTES.map((item) => (
          <ListItem key={item.name} disablePadding onClick={() => handleRedirect(item.path)}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> 
    </Box>
  );

  return (
    <>
      <IconButton onClick={() => toggleDrawer(true)}><Menu /></IconButton>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}

export default DrawerComponent
