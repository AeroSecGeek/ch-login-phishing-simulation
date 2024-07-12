import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

interface Props {
  picture: string;
  title: string;
}

export function LoginCard(props: Props) {
  return (
    <Card
      sx={{
        width: "144px",
        height: "144px",
        bgcolor: "white",
        padding: 0,
        ":last-child": { paddingBottom: 0 },
      }}
    >
      <CardContent
        sx={{ padding: 0, ":last-child": { paddingBottom: 0 }, height: "100%" }}
      >
        <CardActionArea sx={{ height: "100%" }}>
          <Box
            sx={{
              mt: 2,
              textAlign: "center",
            }}
          >
            <img src={props.picture} height={"62px"} />
            <Typography sx={{ mt: 1, fontSize: "1rem", color: "primary.main" }}>
              {props.title}
            </Typography>
          </Box>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}
