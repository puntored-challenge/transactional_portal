import { Outlet } from "react-router-dom";
import { ThemeToggle } from '../components/common/ThemeToggle';
import { Box, Typography } from "@mui/material";

export const AuthLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Box 
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={2}
      >
        <Typography>AuthLayout</Typography>
        <ThemeToggle />
      </Box>

      {/* Contenedor central */}
      <Box
        sx={{
          flexGrow: 1, // ocupa el espacio restante
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          overflowY: "auto",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
