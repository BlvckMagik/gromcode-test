import {
  Tabs as MUITabs,
  Tab as MUITab,
  Tooltip as MUITooltip,
  Skeleton as MUISkeleton,
  Alert as MUIAlert,
} from "@mui/material";
import { DataGrid as MUIDataGrid } from "@mui/x-data-grid";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/system";

export const InfoLayout = styled("div")(({ theme }) => ({
  width: "90%",
  maxWidth: "1120px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
  transition: "all .5s",

  [theme.breakpoints.up("sm")]: {
    width: "70%",
  },
}));

export const Tabs = styled(MUITabs)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "37px 37px 0 0",

  [theme.breakpoints.up("sm")]: {
    borderRadius: "59px 59px 0 0",
  },

  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

export const Tab = styled(MUITab, {
  shouldForwardProp: (prop) => prop !== "selected",
  // @ts-ignore
})(({ theme, selected }) => ({
  maxWidth: "none",
  width: selected ? "56%" : "45%",
  backgroundColor: selected ? "white" : "transparent",
  color: selected ? theme.palette.primary.main : theme.palette.common.white,
  borderRadius: selected ? "36px 36px 0 0" : "0",
  border: "none",

  [theme.breakpoints.up("sm")]: {
    borderRadius: selected ? "58px 58px 0 0" : "0",
    fontSize: "24px",
  },
}));

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

export const Skeleton = styled(MUISkeleton)(({ theme }) => ({
  width: "100%",
  height: "300px",
}));

export const DataGrid = styled(MUIDataGrid)(({ theme }) => ({
  width: "100%",
  backgroundColor: "white",

  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
}));

export const Alert = styled(MUIAlert)(({ theme }) => ({
  backgroundColor: "#D84646",
  color: theme.palette.common.white,
  "& .MuiAlert-icon": {
    color: theme.palette.common.white,
  },
}));
