import { Button as MUIButton, TextField as MUITextField } from "@mui/material";
import { styled } from "@mui/system";

export const InputBase = styled("div")(({ theme }) => ({
  transition: "all .5s",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "70%",
  marginTop: "26px",

  [theme.breakpoints.up("sm")]: {
    marginTop: "36px",
    flexDirection: "row",
    gap: 0,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "740px",
  },
}));

export const Button = styled(MUIButton)(({ theme }) => ({
  borderRadius: "12px",
  transition: "all .5s",

  [theme.breakpoints.up("sm")]: {
    width: "30%",
    height: "80px",
    fontSize: "24px",
    borderRadius: "0 80px 0 0",

    ":hover": {
      borderRadius: "0 20px 0 0",
    },
  },
}));

export const TextField = styled(MUITextField)(({ theme }) => ({
  transition: "all .5s",

  [theme.breakpoints.up("sm")]: {
    width: "70%",
    height: "80px",

    "& .MuiInputBase-root": {
      height: "80px",
      fontSize: "24px",
    },
  },
}));
