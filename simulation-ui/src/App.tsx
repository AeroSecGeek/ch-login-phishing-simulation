import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { Home } from "./views/Home";
import { Login } from "./views/Login";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Box>
  );
}

export default App;
