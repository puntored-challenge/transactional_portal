import React, { useCallback } from "react";
import { ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import { getTheme } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { toggleMode } from "../../store/slice/themeSlice";
import { DarkMode, LightMode } from "@mui/icons-material";


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
