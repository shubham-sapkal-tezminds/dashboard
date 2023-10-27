import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import SidebarItems from "./SidebarItems";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const drawerWidth = 265;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

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
      <Main open={props.open}>
        <Typography>hjweghkjash</Typography>
      </Main>
    </>
  );
};

export default DashBoardSideBar;
