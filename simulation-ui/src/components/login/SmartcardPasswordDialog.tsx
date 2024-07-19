import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import SecurityIcon from "@mui/icons-material/Security";
import SimCardTwoToneIcon from "@mui/icons-material/SimCardTwoTone";

interface SmartcardPasswordDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const SmartcardPasswordDialog: React.FC<SmartcardPasswordDialogProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SecurityIcon sx={{ mr: 2 }} />
          <Typography variant="body1">Windows Security</Typography>
        </Box>
        <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
          Smartcard
        </Typography>
        <Typography variant="body1">Enter your smartcard PIN:</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SimCardTwoToneIcon
            style={{ transform: "rotate(90deg)" }}
            fontSize="large"
            sx={{ mr: 1 }}
          />
          <TextField
            type="password"
            placeholder="PIN"
            variant="outlined"
            fullWidth
            sx={{ marginTop: "16px", marginBottom: "16px" }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={onSubmit}
            fullWidth
            sx={{ mr: 1 }}
          >
            OK
          </Button>
          <Button variant="outlined" onClick={onClose} fullWidth>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

export default SmartcardPasswordDialog;
