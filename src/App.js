import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Routes from "./routes/index";

const dashBoardBg = createTheme({
  palette: {
    background: {
      default: "#F7FBFF",
    },
  },
});

function App() {
  return (
    <>
      {/* <LandingPage /> */}
      <ThemeProvider theme={dashBoardBg}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
