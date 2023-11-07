import {
  Box,
  Button,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

const MoreSetting = () => {
  return (
    <>
      <Box
        sx={{
          border: "1px solid #E8E8E8",
          borderRadius: "16px",
          width: "630px",
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
          Email Settings
        </Typography>
        <Divider />
        <form>
          <Box
            sx={{
              padding: "18px 27px 0 24px",
              display: "flex",
              flexDirection: "column",
              mb: "21px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                mb: "30px",
              }}
            >
              <FormGroup>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Email notification"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="Send copy to personal email"
                />
              </FormGroup>
            </Box>
            <Divider sx={{ mt: "16px", mb: "24px" }} />
            <Button
              variant="contained"
              sx={{ width: "160px", alignSelf: "flex-end" }}
            >
              Update Settings
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default MoreSetting;
