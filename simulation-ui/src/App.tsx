import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import "./assets/fonts.css";
import { ThemeProvider } from "@mui/material/styles";
import { primaryTheme } from "./components/layout/Theme";

function App() {
  return (
    <ThemeProvider theme={primaryTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
