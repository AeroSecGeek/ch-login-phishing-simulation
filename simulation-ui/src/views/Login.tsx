import { Box } from "@mui/material";
import { Header } from "../components/login/Header";
import { Footer } from "../components/login/Footer";
import { Form } from "../components/login/Form";

export function Login() {
  return (
    <Box>
      <Header />
      <Form />
      <Footer />
    </Box>
  );
}
