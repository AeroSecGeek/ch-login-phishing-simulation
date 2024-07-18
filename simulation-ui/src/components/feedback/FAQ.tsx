import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export interface Props {
  question: string;
  answer: React.JSX.Element;
}
export function FAQ(props: Props) {
  return (
    <Box>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Typography variant="h5">{props.question}</Typography>
      <Typography>{props.answer}</Typography>
    </Box>
  );
}
