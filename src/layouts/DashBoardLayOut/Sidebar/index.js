import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import SidebarItems from "./SidebarItems";
import { useLocation } from "react-router-dom";

const drawerWidth = 265;

const DashBoardSideBar = (props) => {
  const location = useLocation();
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#F7FBFF",
            marginTop: "90px",
          },
        }}
        variant="persistent"
        anchor="left"
        open={props.open}
      >
        <Divider />
        <List>
          <SidebarItems currentItem={location.pathname} />
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default DashBoardSideBar;
