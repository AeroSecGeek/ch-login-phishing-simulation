import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import chLogin from "../../assets/CH-Login.svg";
import footerLogin from "../../assets/footer-login.svg";
import { useEffect, useState } from "react";
import { OtherLogins } from "./OtherLogins";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useLogAttemptMutation } from "../../services/api";
import { Fedlogin } from "./Fedlogin";

export function Form() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [displayPlaintext, setDisplayPlaintext] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [logAttempt, { isSuccess }] = useLogAttemptMutation();

  function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleContinue() {
    if (isValidEmail(email)) {
      setShowPassword(true);
    } else {
      setEmailError(true);
    }
  }

  function handleLogin() {
    if (password === "" || password.length <= 7) {
      setPasswordError(true);
    } else {
      logAttempt({ email });
    }
  }

  useEffect(() => {
    if (!showPassword) {
      setPassword("");
    }
  }, [showPassword]);

  useEffect(() => {
    if (isSuccess !== undefined && isSuccess) {
      // navigate to next page
    }
  }, [isSuccess]);

  return (
    <Box
      sx={{
        bgcolor: "#F8F9FA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "82px",
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
                {showPassword
                  ? "Geben Sie Ihr Passwort ein, um sich anzumelden"
                  : "Geben Sie Ihr E-Mail ein, um fortzufahren"}
              </Typography>
              {showPassword && (
                <Box>
                  <Box
                    sx={{
                      mt: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.875rem", color: "#636464" }}>
                      {email}
                    </Typography>
                    <Button
                      variant="outlined"
                      style={{ textTransform: "none" }}
                      onClick={() => setShowPassword(false)}
                    >
                      <Typography
                        sx={{
                          fontFamily: "RotisSansSerifLight",
                          fontWeight: 400,
                          fontSize: "1rem",
                        }}
                      >
                        Ändern
                      </Typography>
                    </Button>
                  </Box>
                  <Box marginTop={1}>
                    <FormControl sx={{ width: "100%" }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">
                        Passwort*
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={displayPlaintext ? "text" : "password"}
                        error={passwordError}
                        fullWidth
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value);
                          setPasswordError(false);
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() =>
                                setDisplayPlaintext(!displayPlaintext)
                              }
                              edge="end"
                            >
                              {displayPlaintext ? (
                                <VisibilityOff htmlColor={"#636464"} />
                              ) : (
                                <Visibility htmlColor={"#636464"} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Passwort*"
                      />
                    </FormControl>
                  </Box>
                  <Box marginTop={2}>
                    <Link href="https://chlogin.zd.eiam.admin.ch/auth/saml2/sso/IDP-PRIVATE?login&language=de">
                      Passwort vergessen?
                    </Link>
                  </Box>
                </Box>
              )}
              {!showPassword && (
                <TextField
                  label="E-Mail*"
                  helperText={
                    emailError
                      ? "Geben Sie bitte eine gültige E-Mail-Adresse ein"
                      : ""
                  }
                  error={emailError}
                  sx={{ mt: 1 }}
                  fullWidth
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setEmailError(false);
                  }}
                />
              )}
              <Box sx={{ mt: "32px", display: "flex", justifyContent: "end" }}>
                <Box>
                  <Button style={{ textTransform: "none" }}>Abbrechen</Button>
                  {!showPassword && (
                    <Button
                      style={{ textTransform: "none" }}
                      sx={{
                        ml: "24px",
                      }}
                      variant="contained"
                      onClick={handleContinue}
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
                  )}
                  {showPassword && (
                    <Button
                      style={{ textTransform: "none" }}
                      sx={{
                        ml: "24px",
                      }}
                      variant="contained"
                      onClick={handleLogin}
                    >
                      <Typography
                        sx={{
                          fontFamily: "RotisSansSerifLight",
                          fontWeight: 300,
                          fontStretch: "extra-expanded",
                        }}
                      >
                        Login
                      </Typography>
                    </Button>
                  )}
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
                  <img
                    src={footerLogin}
                    title="icon"
                    height="147px"
                    alt="Logo"
                  />
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Fedlogin />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <OtherLogins />
        </Box>
      </Box>
    </Box>
  );
}
