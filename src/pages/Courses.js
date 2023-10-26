import { Box, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <Box>
        <Typography>This is the Courses Page</Typography>
        <Link to="/courses/search">Search</Link>
        <Outlet />
      </Box>
    </>
  );
};

export default Courses;
