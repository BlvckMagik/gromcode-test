import { Tooltip as MUITooltip } from "@mui/material";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/system";

export const DateSelector = styled("div")(({ theme }) => ({
  height: "60px",
  width: "100%",
  backgroundColor: theme.palette.common.white,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  transition: "all .5s",

  [theme.breakpoints.up("sm")]: {
    height: "90px",
    justifyContent: "start",
  },
}));

export const DatePicker = styled(MUIDatePicker)(({ theme }) => ({
  boxShadow: "none",
  "& .MuiInputBase-root": {
    "& .MuiInputBase-input": {
      width: "100px",
    },
  },
}));

export const Tooltip = styled(MUITooltip)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
