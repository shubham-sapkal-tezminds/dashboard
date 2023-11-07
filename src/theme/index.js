import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif !important",
    subtitle1: {
      fontSize: "20px",
    },
    subtitle2: {
      fontSize: "14px",
    },
  },
  palette: {
    background: {
      default: "#F7FBFF",
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
      styleOverrides: {
        root: {
          // backgroundColor: "#FFFFFF",
          width: "100%",
          maxWidth: "1118px",
          height: "auto",
          marginTop: "65px",
          marginInline: "auto",
          borderRadius: "16px",
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderStyle: "none",
          border: "none",
          padding: "0 0 1rem 0",
          // "&>.MuiDataGrid-main": {
          //   "&>.MuiDataGrid-columnHeaders": {
          //     borderBottom: "none",
          //   },
          //   "& div div div div >.MuiDataGrid-cell": {
          //     borderBottom: "none",
          //   },
          // },
        },
        footerContainer: {
          display: "none",
        },
        columnHeaderTitle: {
          fontSize: "14px",
          fontWeight: "600",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          lineHeight: "22px",
          letterSpacing: "0.5px",
          fontWeight: "bold",
          color: "#000000",
          textTransform: "capitalize",
        },
        selected: {
          color: "#0064D9",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          padding: "11px 22px",
          fontSize: "14px",
          fontWeight: "bold",
          borderRadius: "8px",
          height: "42px",
        },
        contained: {
          color: "#FFFFFF",
          backgroundColor: "#0064D9",
        },
        text: {
          color: "#0064D9",
        },
      },
    },
  },
});
