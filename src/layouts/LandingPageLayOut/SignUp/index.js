import {
  Backdrop,
  Box,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { userApi } from "../../../Services/user";

const SignUp = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const onInputDetails = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignUp = () => {
    const newErrors = {};

    if (!user.firstname) {
      newErrors.firstname = "First name is required";
    }

    if (!user.email) {
      newErrors.email = "Email is required";
    }

    if (!user.password) {
      newErrors.password = "Password is required";
    }

    if (!user.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions";
    }

    console.log("pata");
    // if (Object.keys(newErrors).length > 0) {
    //   setErrors(newErrors);
    //   return;
    // }
    userApi.signup(user.firstname, user.lastname, user.email, user.password);
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
            Sign Up
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
            <Box sx={{ display: "flex", gap: "16px" }}>
              <TextField
                variant="outlined"
                label="First name"
                required
                value={user.firstname}
                name="firstname"
                onChange={onInputDetails}
              ></TextField>
              <TextField
                variant="outlined"
                label="Last name"
                value={user.lastname}
                name="lastname"
                onChange={onInputDetails}
              ></TextField>
            </Box>
            <TextField
              fullWidth
              variant="outlined"
              required
              label="Email Address / Username"
              value={user.email}
              name="email"
              onChange={onInputDetails}
            ></TextField>{" "}
            <TextField
              fullWidth
              type="password"
              variant="outlined"
              label="Password"
              required
              value={user.password}
              name="password"
              onChange={onInputDetails}
            ></TextField>
            <Box display="flex">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Agree with "
                sx={{ color: "#6B7584", mr: 1 }}
              />
              <Link
                href="#"
                underline="none"
                sx={{ color: "#000000", marginBlock: "auto" }}
              >
                Terms & Condition
              </Link>
            </Box>
            <Button variant="contained" fullWidth onClick={handleSignUp}>
              Sign In
            </Button>
            <Button
              variant="text"
              sx={{
                mt: "38px",
              }}
            >
              Already have an account?
            </Button>
          </form>
        </Box>
      </Backdrop>
    </>
  );
};

export default SignUp;
