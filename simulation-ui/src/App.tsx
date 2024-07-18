import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import "./assets/fonts.css";
import { ThemeProvider } from "@mui/material/styles";
import { primaryTheme } from "./components/layout/Theme";
import { Dashboard } from "./views/admin/Dashboard";
import { Feedback } from "./views/Feedback";

function App() {
  return (
    <ThemeProvider theme={primaryTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
