import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import fedlogin from "../../assets/Button_contextSwitchLogin.svg";
import { LoginCard } from "./LoginCard";

export function Fedlogin() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        flexDirection: "column",
        maxWidth: "640px",
        width: "100%",
      }}
    >
      <Typography sx={{ color: "#636464", fontSize: "0.9rem" }}>
        Zuletzt verwendet
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{
          maxWidth: "640px",
          mt: 1,
        }}
      >
        <Grid xs={6} md={3} key={"Fedlogin"}>
          <LoginCard picture={fedlogin} title={"FED-LOGIN"} />
        </Grid>
      </Grid>
    </Box>
  );
}
