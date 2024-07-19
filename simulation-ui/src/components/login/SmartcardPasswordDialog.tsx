import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import SecurityIcon from "@mui/icons-material/Security";

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
          <Typography variant="h6">Windows Security</Typography>
        </Box>

        <Typography variant="body1">Enter your smartcard PIN:</Typography>
        <TextField
          type="password"
          placeholder="PIN"
          variant="outlined"
          fullWidth
          sx={{ marginTop: "16px", marginBottom: "16px" }}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" color="primary" onClick={onSubmit}>
            OK
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
