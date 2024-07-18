import { Box } from "@mui/material";
import { BasicAppBar } from "../components/admin/dashboard/BasicAppBar";
import { LearningContent } from "../components/feedback/LearningContent";

export function Feedback() {
  return (
    <Box>
      <BasicAppBar title="Feedback" />
      <LearningContent />
    </Box>
  );
}
