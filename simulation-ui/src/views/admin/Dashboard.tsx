import { Box } from "@mui/material";
import { BasicAppBar } from "../../components/admin/dashboard/BasicAppBar";
import { AdminDashboard } from "../../components/admin/dashboard/AdminDashboard";

export function Dashboard() {
  return (
    <Box>
      <BasicAppBar title="Admin Dashboard" />
      <AdminDashboard />
    </Box>
  );
}
