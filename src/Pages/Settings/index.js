import { Container, Typography, Box, Tabs, Tab, Divider } from "@mui/material";
import PersonalDetails from "./PersonalDeatails/index";
import ChnagePassword from "./ChangePass/index";
import MoreSetting from "./MoreSetting/index";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Settings = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container
        sx={{
          "&.MuiContainer-root": {
            pl: 0,
            pr: 0,
            backgroundColor: "#FFFFFF",
          },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          sx={{}}
        >
          {/* <Link label="Personal Details" to="/personaldetails"> */}
          <Tab
            label="Personal Details"

            // to={<PersonalDetails />}
          />
          {/* </Link> */}
          {/* <Link label="Page Two" to="PATH_SETTINGS/personaldetails"> */}
          <Tab label="Change Password" />
          {/* </Link> */}

          <Tab label="Settings" />
        </Tabs>

        <Divider />

        <CustomTabPanel value={value} index={0}>
          {/* <Link to="/personaldetails"> */}
          <PersonalDetails />
          {/* </Link> */}
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <ChnagePassword />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <MoreSetting />
        </CustomTabPanel>
      </Container>
    </>
  );
};

export default Settings;
