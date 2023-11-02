import { Box } from "@mui/material";
// import BgImg from "/assets/bg_image.png";

import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(/assets/bg_image.png)`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Home;
