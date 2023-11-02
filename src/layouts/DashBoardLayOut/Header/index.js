import { useState } from "react";
import { Button, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = ({ handleClick }) => {
  // const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        top="0"
        sx={{
          backgroundColor: "#F7FBFF",
          paddingBlock: "13px",
          boxShadow: "none",
          borderBottom: "1px solid #DEE4EA",
          width: "100%",
        }}
      >
        <Box
          sx={{
            marginInline: "23px",
          }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "242px",
                justifyContent: "space-between",
                paddingRight: "23px",
              }}
            >
              <img src="/assets/tezminds_logo_1.png" alt="Logo image1" />
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              ></Menu>
            </Box> */}

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
            <Box
              sx={{
                height: "35px",
                width: "35px",
                backgroundColor: "#DEECFB",
                borderRadius: 2,
                marginRight: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  "& .MuiButton-root, &:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <NotificationsNoneOutlinedIcon sx={{ color: "#000" }} />
              </Button>
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                alignItems: "center",
                width: "92px",
                height: "50px",
                backgroundColor: "#FFFFFF",
                borderRadius: "25px",
                border: "1px solid #E8E8E8",
              }}
            >
              <Box>
                <Tooltip
                  title="Open settings"
                  sx={{
                    display: "flex",
                  }}
                >
                  <IconButton onClick={handleOpenUserMenu} sx={{}}>
                    <Avatar alt="Remy Sharp" src="/assets/Oval.png" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <SettingsOutlinedIcon sx={{ color: "#BFC0C2" }} />
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;
