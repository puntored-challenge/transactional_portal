import { Box } from "@mui/material";
import LogoComponent from "../components/common/LogoComponent";
import { ThemeToggle } from "../components/common/ThemeToggle";
import { Outlet } from "react-router-dom";
import { LogoutComponent } from "../components/auth/LogoutComponent";
import DrawerComponent from "../components/common/DrawerComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setClose } from "../store/slice/messageDialogSlice";
import { MessageDialogComponent } from "../components/common/MessageDialogComponent";

/**
 * MainLayout
 *
 * Componente de React que proporciona el layout principal de la aplicación.
 * Generalmente incluye barra de navegación, sidebar, footer y un contenedor
 * para renderizar el contenido principal de cada página.
 */
export const MainLayout = () => {

  const dispatch = useDispatch();
  const dialogState = useSelector((state: RootState) => state.messageDialogState);
  return (
    <>
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
        <Box
          display={'flex'}
          gap={2}
        >
          <DrawerComponent />
          <LogoComponent />
        </Box>
        <Box
          display={'flex'}
          gap={2}
        >
          <ThemeToggle />
          <LogoutComponent />
        </Box>
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
      <MessageDialogComponent
        open={dialogState.open}
        messageInformation={dialogState.messageDialog}
        onClose={() => dispatch(setClose())}
      />
    </>
  );
}
