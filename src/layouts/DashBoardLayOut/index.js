import { useState } from "react";
import Navbar from "./Header/index";
import SideBar from "./Sidebar/index";
// import { Outlet } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const drawerWidth = 265;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 265,
    }),
  })
);

const DashBoardLayOut = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  function openDrawerSide() {
    setOpenDrawer((prevState) => !prevState);
  }

  return (
    <>
      <Navbar handleClick={openDrawerSide} />
      <SideBar open={openDrawer} />
      <Main open={openDrawer}>
        <Box>
          <Outlet />
        </Box>
      </Main>
    </>
  );
};

export default DashBoardLayOut;
