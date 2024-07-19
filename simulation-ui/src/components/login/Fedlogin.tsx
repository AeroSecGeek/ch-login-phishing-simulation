import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import fedlogin from "../../assets/Button_contextSwitchLogin.svg";
import { LoginCard } from "./LoginCard";
import { useEffect, useState } from "react";
import SmartcardPasswordDialog from "./SmartcardPasswordDialog";
import { useNavigate } from "react-router-dom";
import { useLogOtherAttemptMutation } from "../../services/api";

export function Fedlogin() {
  const [showSmartcardDialog, setShowSmartcardDialog] = useState(false);
  const navigate = useNavigate();

  const [logOtherAttempt, { data }] = useLogOtherAttemptMutation();

  function handleFedloginClick() {
    setShowSmartcardDialog(true);
  }

  function handlePinSubmitted() {
    logOtherAttempt();
  }

  useEffect(() => {
    if (data !== undefined && data.success) {
      navigate("/feedback");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
          <LoginCard
            picture={fedlogin}
            title={"FED-LOGIN"}
            onClick={handleFedloginClick}
          />
        </Grid>
      </Grid>
      <SmartcardPasswordDialog
        open={showSmartcardDialog}
        onClose={() => setShowSmartcardDialog(false)}
        onSubmit={handlePinSubmitted}
      />
    </Box>
  );
}
