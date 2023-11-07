import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const ChnagePassword = () => {
  return (
    <>
      <Box
        sx={{
          border: "1px solid #E8E8E8",
          borderRadius: "16px",
          width: "630px",
          mb: 3,
          width: "100%",
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
          <Grid
            container
            direction="column"
            sx={{
              padding: "18px 27px 0 24px",
              mb: "24px",
              // display: "flex",
              // flexDirection: "column",
            }}
          >
            <Box
              item
              sx={{
                mb: "30px",
              }}
            >
              <TextField
                id="outlined-password-input"
                label="Current password"
                type="password"
                sx={{
                  width: "500px",
                }}
                // size="medium"
                // fullWidth
              />
            </Box>
            <Box
              item
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: "24px",
              }}
            >
              <TextField
                id="outlined-password-input"
                label="New password"
                type="password"
                sx={{
                  width: "500px",
                }}
                // autoComplete="current-password"
              />
              <TextField
                id="outlined-password-input"
                label="Confirm password"
                type="password"
                sx={{
                  width: "500px",
                }}
                // autoComplete="current-password"
              />
            </Box>
            <Box
              item
              sx={{
                display: "flex",
                justifyContent: "flex-end",
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
                Change Password
              </Button>
            </Box>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default ChnagePassword;
