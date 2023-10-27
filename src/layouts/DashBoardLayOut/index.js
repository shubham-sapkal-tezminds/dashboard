import { useState } from "react";
import Navbar from "./Header/index";
import SideBar from "./Sidebar/index";
// import { Outlet } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const DashBoardLayOut = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  function openDrawerSide() {
    setOpenDrawer((prevState) => !prevState);
    console.log("State", openDrawer);
  }

  return (
    <>
      <Navbar handleClick={openDrawerSide} />
      <SideBar open={openDrawer} />
      <Box
        sx={
          {
            // position: "absolute",
            // top: "8",
            // left: "8",
          }
        }
      >
        <Outlet />
      </Box>
    </>
  );
};

export default DashBoardLayOut;
