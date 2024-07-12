import { createTheme } from "@mui/material/styles";

export const primaryTheme = createTheme({
  shape: { borderRadius: 2 },
  palette: {
    primary: {
      main: "#2A6495",
      dark: "#6A6464",
      light: "#F3F7FA",
    },
    secondary: {
      main: "#e2c044",
    },
    background: {
      paper: "#F8F9FA",
    },
    text: {
      primary: "#111111",
      secondary: "#767778",
    },
    action: {
      active: "#001E3C",
    },
  },
});
