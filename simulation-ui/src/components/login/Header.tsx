import {
  Box,
  Button,
  Divider,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo.svg";
import HelpIcon from "@mui/icons-material/Help";

export function Header() {
  return (
    <Box sx={{ position: "sticky", top: 0, bgcolor: "white" }}>
      <Box
        sx={{
          padding: "14px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "start" }}>
          <img src={logo} alt="Logo" width={"216px"} />
          <Typography
            sx={{
              ml: 2,
              fontFamily: "RotisSansSerifLight",
              fontSize: "1.75rem",
            }}
          >
            eIAM
          </Typography>
        </Box>
        <Box>
          <Button sx={{ border: 1, color: "black", height: "40px" }}>
            <HelpIcon fontSize="small" />
          </Button>
          <Select
            value={10}
            size="small"
            sx={{ ml: 1, border: 1, color: "black" }}
          >
            <MenuItem value={10}>DE</MenuItem>
            <MenuItem value={20}>FR</MenuItem>
            <MenuItem value={30}>IT</MenuItem>
            <MenuItem value={30}>EN</MenuItem>
          </Select>
        </Box>
      </Box>
      <Divider sx={{ border: 2, borderColor: "#dc0018", width: "100%" }} />
    </Box>
  );
}
