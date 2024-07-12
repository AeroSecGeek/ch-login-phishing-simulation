import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import chLogin from "../../assets/CH-Login.svg";
import footerLogin from "../../assets/footer-login.svg";
import { useState } from "react";
import { OtherLogins } from "./OtherLogins";

export function Form() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        bgcolor: "#F8F9FA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
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
        <CardContent
          sx={{
            padding: 0,
            ":last-child": { paddingBottom: 0 },
          }}
        >
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
            <Box
              sx={{
                width: isMobile ? "90%" : "100%",
                maxWidth: "560px",
                mt: "24px",
              }}
            >
              <Typography sx={{ fontFamily: "Bold65", fontSize: "1.125rem" }}>
                Geben Sie Ihr E-Mail ein, um fortzufahren
              </Typography>
              <TextField
                label="E-Mail*"
                sx={{ mt: 1 }}
                fullWidth
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Box sx={{ mt: "32px", display: "flex", justifyContent: "end" }}>
                <Box>
                  <Button style={{ textTransform: "none" }}>Abbrechen</Button>
                  <Button
                    style={{ textTransform: "none" }}
                    sx={{
                      ml: "24px",
                    }}
                    variant="contained"
                  >
                    <Typography
                      sx={{
                        fontFamily: "RotisSansSerifLight",
                        fontWeight: 300,
                        fontStretch: "extra-expanded",
                      }}
                    >
                      Weiter
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                mt: "32px",
                bgcolor: "primary.light",
                width: "100%",
                height: "124px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  maxWidth: "560px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  paddingTop: "24px",
                  paddingLeft: isMobile ? 2 : 0,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Bold65",
                    fontSize: "1.125rem",
                    color: "primary.main",
                  }}
                >
                  Noch keinen Account?
                </Typography>
                <Button
                  variant="outlined"
                  style={{ textTransform: "none" }}
                  sx={{ width: "169px" }}
                  onClick={() =>
                    (window.location.href =
                      "https://chlogin.zd.eiam.admin.ch/auth/saml2/sso/IDP-PRIVATE?login&language=de")
                  }
                >
                  <Typography
                    sx={{
                      fontFamily: "RotisSansSerifLight",
                      fontWeight: 400,
                      fontSize: "1rem",
                    }}
                  >
                    Account erstellen
                  </Typography>
                </Button>
              </Box>
              {!isMobile && (
                <Box
                  sx={{
                    position: "absolute",
                    right: "32px",
                    bottom: "8px",
                  }}
                >
                  <img src={footerLogin} title="icon" height="147px" />
                </Box>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ minWidth: 400, width: "90%", maxWidth: "950px" }} mb={1}>
        <Divider sx={{ color: "#CACED4" }} variant="fullWidth">
          <Typography sx={{ color: "#636464", fontSize: "0.8rem" }}>
            oder weiter mit
          </Typography>
        </Divider>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <OtherLogins />
        </Box>
      </Box>
    </Box>
  );
}
