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
        default: mode === "light" ? "#f5f5f5" : "#121212",
        paper: mode === "light" ? "#fff" : "#1d1d1d",
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
    },
});
