import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import chLogin from "../../assets/CH-Login.svg";

export function Form() {
  return (
    <Box sx={{ bgcolor: "#F8F9FA", display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          minWidth: 400,
          width: "90%",
          maxWidth: 950,
          bgcolor: "white",
          mt: "24px",
          mb: "24px",
        }}
      >
        <CardContent>
          <Box textAlign={"center"}>
            <img src={chLogin} alt="CH-Login-Icon" />
            <Divider variant="fullWidth" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={{ width: "100%", maxWidth: "560px", mt: "24px" }}>
              <Typography sx={{ fontFamily: "Bold65", fontSize: "1.125rem" }}>
                Geben Sie Ihr E-Mail ein, um fortzufahren
              </Typography>
              <TextField label="E-Mail*" sx={{ mt: 1 }} fullWidth />
              <Box sx={{ mt: "32px", display: "flex", justifyContent: "end" }}>
                <Box>
                  <Button style={{ textTransform: "none" }}>Abbrechen</Button>
                  <Button
                    style={{ textTransform: "none" }}
                    sx={{ ml: "24px" }}
                    variant="contained"
                  >
                    Weiter
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
