import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#F7FBFF",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: "100px",
          paddingLeft: 1,
        },
      },
    },
  },
});
