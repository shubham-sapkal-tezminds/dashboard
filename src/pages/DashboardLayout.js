import { useState } from "react";
import Navbar from "../common/Navbar";
import SideBar from "../common/dashBoardSideBar";

const DashBoard = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  function openDrawerSide() {
    setOpenDrawer((prevState) => !prevState);
    console.log("State", openDrawer);
  }

  return (
    <>
      <Navbar handleClick={openDrawerSide} />
      <SideBar open={openDrawer} />
    </>
  );
};

export default DashBoard;
