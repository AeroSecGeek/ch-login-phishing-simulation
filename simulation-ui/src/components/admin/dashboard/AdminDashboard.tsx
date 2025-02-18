import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLazyGetDashboardQuery } from "../../../services/api";
import { AttemptGrid } from "./AttemptGrid";

export function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);

  const [loadData, { data, error }] = useLazyGetDashboardQuery();

  function handleLoadData() {
    if (password === "") {
      return;
    }
    loadData({ username: "admin", password });
  }

  useEffect(() => {
    if (error !== undefined && "status" in error) {
      const status = error.status;
      if (status === 401) {
        setAuthError(true);
      }
    }
  }, [error]);

  useEffect(() => {
    if (data !== undefined) {
      console.log(data);
      setAuthError(false);
    }
  }, [data]);

  return (
    <Box padding={"32px"}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <TextField
          type="password"
          label="Admin password"
          error={authError}
          helperText={authError ? "The provided password is not correct" : ""}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button variant="contained" sx={{ ml: 1 }} onClick={handleLoadData}>
          Load Data
        </Button>
      </Box>
      {data !== undefined && (
        <Box sx={{ mt: 2 }}>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h5" sx={{ mb: 1 }}>
            Attempted Logins
          </Typography>
          <Typography>Number of Clicks: {data.numberOfVisits}</Typography>
          <Typography>
            Other login attemtps (FED, AGOV etc.): {data.otherAttempts}
          </Typography>
          <AttemptGrid data={data.chLogin} />
        </Box>
      )}
    </Box>
  );
}
