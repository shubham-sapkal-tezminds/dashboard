import { Box } from "@mui/material";
import BgImg from "../assets/bg_image.png";
import LogIn from "./Login";
import SignUp from "./SignUp";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${BgImg})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <LogIn />
        <SignUp />
      </Box>
    </>
  );
};

export default Home;
