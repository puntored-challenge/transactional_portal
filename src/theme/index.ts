import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#fc0a8b",
      },
      secondary: {
        main: "#9c27b0",
      },
      background: {
        default: mode === "light" ? "#fff" : "#121212",
        paper: mode === "light" ? "#f5f5f5" : "#1d1d1d",
      },
    },
    typography: {
      fontFamily: "'Exo', sans-serif",
    },
});
