import palette from "./palette";

const overrides = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
    },
    styleOverrides: {
      root: {
        textTransform: "none",
        fontWeight: 500,
        minWidth: "100px",
        borderRadius: 0,
        color: palette.common.white,

        "&.Mui-disabled": {
          color: "#FFFFFFDE",
          backgroundColor: "#B4B4B4",
        },
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: "outlined",
    },
    styleOverrides: {
      root: {
        textTransform: "none",
        fontWeight: 400,
        minWidth: "100px",
        borderRadius: 0,
        boxShadow:
          "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",

        "& .MuiOutlinedInput-root": {
          borderRadius: 0,
          backgroundColor: palette.common.white,

          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
      },
    },
  },

  MuiTab: {
    defaultProps: {
      disableRipple: true,
    },
  },
};

export default overrides;
