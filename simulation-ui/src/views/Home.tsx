import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <Box>
      <h1>Home</h1>
      <p>This is the home page where the login button will be displayed.</p>
      <Button variant="contained" onClick={() => navigate("/login")}>
        Login
      </Button>
    </Box>
  );
}
