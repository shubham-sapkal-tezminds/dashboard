import {
  Box,
  Typography,
  Grid,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";

const PersonalDetails = () => {
  const [personalDetails, setPersonalDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobilenumber: 0,
    bio: "",
    address: "",
    image: "",
    portfoliourl: "",
    facebookurl: "",
    twitterurl: "",
    instagramurl: "",
  });

  return (
    <>
      <Grid container gap="24px" justifyContent="space-between">
        <Box item xs={12} sm={12} md={8} lg={8}>
          <Box
            sx={{
              border: "1px solid #E8E8E8",
              borderRadius: "16px",
              width: "630px",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                padding: "14px 23px",
                color: "#000000",
                fontSize: "16px",
                fontWeight: "bold",
                letterSpacing: "0.5px",
              }}
            >
              Personal Information
            </Typography>
            <Divider />
            <form>
              <Box
                sx={{
                  padding: "18px 27px 0 24px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                    mb: "30px",
                  }}
                >
                  <TextField
                    id="outlined-required"
                    label="First name"
                    defaultValue="Evelyn"
                  />
                  <TextField
                    id="outlined-required"
                    label="Last name"
                    defaultValue="Smith"
                  />
                </Box>
                <TextField
                  fullWidth
                  id="outlined-multiline-flexible"
                  label="Bio"
                  defaultValue="I consider myself as a creative, professional and a flexible person. I can adapt with any kind of brief and design style"
                  multiline
                  maxRows={2}
                  sx={{
                    mb: "30px",
                  }}
                />
              </Box>
            </form>
          </Box>
          <Box
            sx={{
              border: "1px solid #E8E8E8",
              borderRadius: "16px",
              width: "630px",
            }}
          >
            <Typography
              sx={{
                padding: "14px 23px",
                color: "#000000",
                fontSize: "16px",
                fontWeight: "bold",
                letterSpacing: "0.5px",
              }}
            >
              Social Information
            </Typography>
            <Divider />
            <form>
              <Box
                sx={{
                  padding: "18px 27px 28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <TextField
                  fullWidth
                  id="outlined-multiline-flexible"
                  label="Facebook URL"
                  defaultValue=""
                  sx={{}}
                />
                <TextField
                  fullWidth
                  id="outlined-multiline-flexible"
                  label="Twitter URL"
                  defaultValue=""
                  sx={{}}
                />
                <TextField
                  fullWidth
                  id="outlined-multiline-flexible"
                  label="Instagram URL"
                  defaultValue=""
                  sx={{}}
                />
              </Box>
            </form>
          </Box>
        </Box>
        <Box
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          sx={{
            border: "1px solid #E8E8E8",
            borderRadius: "16px",
            width: "425px",
            height: "fit-content",
          }}
        >
          <Typography
            sx={{
              padding: "14px 23px",
              color: "#000000",
              fontSize: "16px",
              fontWeight: "bold",
              letterSpacing: "0.5px",
            }}
          >
            Contact Information
          </Typography>
          <Divider />
          <form>
            <Box
              sx={{
                padding: "18px 27px 28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="Contact phone"
                defaultValue="+2565256525"
                sx={{}}
              />
              <TextField
                fullWidth
                disabled
                id="outlined-multiline-flexible"
                label="Email"
                defaultValue="Evelyn@gmail.com"
                sx={{}}
              />
              <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="Portfolio url"
                defaultValue="Https://www.myportfolio.com"
                sx={{}}
              />
              <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="Address"
                multiline
                maxRows={6}
                defaultValue="3379 Monroe Avenue, Fort Myers, Florida(33912)"
                sx={{}}
              />
            </Box>
          </form>
        </Box>
        <Box
          item
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Button variant="outlined">Clear</Button>
          <Button
            variant="contained"
            sx={{
              borderColor: "#0064D9",
            }}
          >
            Update Details
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default PersonalDetails;
