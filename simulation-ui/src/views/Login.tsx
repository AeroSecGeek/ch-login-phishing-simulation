import { Box } from "@mui/material";
import { Header } from "../components/login/Header";
import { Footer } from "../components/login/Footer";
import { Form } from "../components/login/Form";
import { useLogVisitMutation } from "../services/api";
import { useEffect } from "react";

export function Login() {
  const [submitVisit] = useLogVisitMutation();

  useEffect(() => {
    submitVisit();
  }, [submitVisit]);

  return (
    <Box>
      <Header />
      <Form />
      <Footer />
    </Box>
  );
}
