import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { Divider } from "@mui/material";

const sideBarItems = [
  {
    link: "/dashboard",
    label: "Dashboard",
    icon: <SpaceDashboardOutlinedIcon />,
  },
  {
    link: "/customer",
    label: "Customer List",
    icon: <PeopleAltOutlinedIcon />,
  },
  {
    link: "/settings",
    label: "Settings",
    icon: <SettingsOutlinedIcon />,
  },
  {
    link: "/contactUs",
    label: "Contact Us",
    icon: <MailOutlineOutlinedIcon />,
  },
  {
    link: "/pricing",
    label: "Pricing",
    icon: <AttachMoneyOutlinedIcon />,
  },
];
const SidebarItems = ({ currentItem }) => {
  return (
    <>
      <List>
        <ListItem style={{ width: "100%" }}>
          <Link to="/getstarted" style={{ width: "100%" }}></Link>
        </ListItem>
      </List>

      <List>
        {sideBarItems.map((item, index) => {
          currentItem =
            currentItem === "/" ? currentItem + "dashboard" : currentItem;

          return (
            <Link
              to={item.link}
              style={{ textDecoration: "none", color: "#2b2b2b" }}
              key={"sidebar_" + index}
            >
              <ListItemButton selected={currentItem === item.link}>
                <ListItemIcon sx={{ minWidth: "unset", mr: 2 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </Link>
          );
        })}
      </List>
    </>
  );
};
export default SidebarItems;
