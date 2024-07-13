import { Box } from "@mui/material";
import { LoggedAttemptDto } from "../../../models/LoggedAttemptDto";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Props {
  data: LoggedAttemptDto[];
}
export function AttemptGrid(props: Props) {
  return (
    <Box>
      <DataGrid
        columns={columns}
        rows={props.data}
        getRowId={(row) => row._id}
        disableRowSelectionOnClick
      />
    </Box>
  );
}

const columns: GridColDef<LoggedAttemptDto>[] = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "email",
    headerName: "E-Mail",
    width: 250,
  },
  {
    field: "timestamp",
    headerName: "Timestamp",
    width: 250,
  },
];
