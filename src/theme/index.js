import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif !important",
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
          width: "100%",
          maxWidth: "1118px",
          height: "auto",
          marginTop: "65px",
          marginInline: "auto",
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
      },
    },
  },
});
