import React, { useCallback } from "react";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { toggleMode } from "../../store/slice/themeSlice";
import { DarkMode, LightMode } from "@mui/icons-material";

/**
 * ThemeToggle
 *
 * Componente de React que permite al usuario alternar entre temas (por ejemplo, claro y oscuro).
 * Maneja el estado del tema y puede interactuar con el contexto o almacenamiento local.
 *
 */
export const ThemeToggle: React.FC = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const dispacth = useDispatch<AppDispatch>()

  const handleToggleMode = useCallback(() => {
    dispacth(toggleMode())
  }, [themeState.mode])

  return (

    <IconButton
      onClick={handleToggleMode}
      color={"primary"}
    >
      {themeState.mode === "light" ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};
