import { Box, Button, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "#e5e7eb",
        bgcolor: "#F5F5F5",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography>
        Bundesamt für Informatik und Telekommunikation BIT
      </Typography>
      <Button
        size="small"
        onClick={() =>
          window.open(
            "https://www.admin.ch/gov/de/start/rechtliches.html",
            "_blank"
          )
        }
      >
        Rechtliche Grundlagen
      </Button>
    </Box>
  );
}
