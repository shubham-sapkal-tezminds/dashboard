import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Backdrop, TextField } from "@mui/material";
import { useState } from "react";
import { userApi } from "../../../Services/user";

const LogIn = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const onInputLoginDetails = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const handleLogIn = () => {
    console.log("Clicked");
    userApi.login(loginUser.email, loginUser.password);
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <Box
          sx={{
            width: "474px",
            backgroundColor: "#FFFFFF",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "51px 42px",
          }}
        >
          <img src="/assets/tezminds_logo_1.png" alt="tezminds logo"></img>
          <Typography
            variant="subtitle1"
            sx={{ color: "#0064D9", fontWeight: 900, mt: "44px" }}
          >
            HI, Welcome Back
          </Typography>
          <Typography variant="body2" sx={{ color: "#6B7584", mt: "16px" }}>
            Enter your credentials to continue
          </Typography>
          <form
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              marginTop: "16px",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              label="Email Address / Username"
              value={loginUser.email}
              name="email"
              onChange={onInputLoginDetails}
            ></TextField>
            <TextField
              fullWidth
              type="password"
              variant="outlined"
              label="Password"
              value={loginUser.password}
              name="password"
              onChange={onInputLoginDetails}
            ></TextField>
            <Button
              variant="text"
              sx={{
                alignSelf: "flex-end",
                height: "auto",
                padding: 0,
              }}
            >
              Forgot Password
            </Button>
            <Button variant="contained" fullWidth onClick={handleLogIn}>
              Sign In
            </Button>
            <Button
              variant="text"
              sx={{
                mt: "38px",
              }}
            >
              Don’t have an account?
            </Button>
          </form>
        </Box>
      </Backdrop>
    </>
  );
};

export default LogIn;
