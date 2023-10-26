// import logo from './logo.svg';
// import { AppBar, Toolbar } from "@mui/material";
import "./App.css";
// import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import Courses from "./pages/Courses";
// import Search from "./components/Search";
import DashboardLayout from "./pages/DashboardLayout";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
      {/* <Router>
        <AppBar position="static">
          <Toolbar
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginInline: "auto",
            }}
          >
            <Link to="/">Home</Link>
            <Link to="courses">Courses</Link>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="courses" element={<Courses />}>
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </Router> */}
      {/* <LandingPage /> */}
      <ThemeProvider theme={dashBoardBg}>
        <CssBaseline />
        <DashboardLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
