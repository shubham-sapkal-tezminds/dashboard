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
import {
  PATH_DASHBOARD,
  PATH_CUSTOMER_LIST,
  PATH_CONTACT_US,
  PATH_PRICING,
  PATH_SETTINGS,
} from "../../../Config/index";
import { Divider } from "@mui/material";

const sideBarItems1 = [
  {
    link: PATH_DASHBOARD,
    label: "Dashboard",
    icon: <SpaceDashboardOutlinedIcon />,
  },
  {
    link: PATH_CUSTOMER_LIST,
    label: "Customer List",
    icon: <PeopleAltOutlinedIcon />,
  },
  {
    link: PATH_SETTINGS,
    label: "Settings",
    icon: <SettingsOutlinedIcon />,
  },
];

const sideBarItems2 = [
  {
    link: PATH_CONTACT_US,
    label: "Contact Us",
    icon: <MailOutlineOutlinedIcon />,
  },
  {
    link: PATH_PRICING,
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
        {sideBarItems1.map((item, index) => {
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
        <Divider />
        {sideBarItems2.map((item, index) => {
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
