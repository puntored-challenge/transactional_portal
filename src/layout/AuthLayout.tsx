import { Outlet } from "react-router-dom";
import { ThemeToggle } from '../components/common/ThemeToggle';
import { Box } from "@mui/material";
import LogoComponent from "../components/common/LogoComponent";

export const AuthLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        backgroundImage: 'url("https://puntored.co/wp-content/uploads/2025/01/Banner_home.png?lm=6792BFE3")',
        backgroundSize: "50%",
        backgroundRepeat: "no-repeat",
        alignContent: "center",
        backgroundPosition: "right center",
      }}

    >
      <Box 
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={2}
      >
        <LogoComponent />
        <ThemeToggle />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
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
