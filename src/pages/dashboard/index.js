import {
  Container,
  Box,
  Typography,
  Paper,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const DashBoard = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          width: "100%",
          maxWidth: "1118px",
          height: "auto",
          marginTop: "40px",
          marginInline: "auto",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={4}>
            <Card
              sx={{
                minWidth: 359,
                height: 98,
                boxShadow: "none",
                backgroundColor: "#0064D9",
                border: "none",
                borderRadius: 2,
              }}
            >
              <Grid container spacing={2} direction="row">
                <Grid container item direction="column">
                  <Grid item>
                    <GroupOutlinedIcon />
                  </Grid>
                  <Grid item>
                    <Typography>Customers</Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography>6035</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Card
              sx={{
                minWidth: 359,
                height: 98,
                boxShadow: "none",
                backgroundColor: "#0064D9",
                border: "none",
                borderRadius: 2,
              }}
            >
              <Grid container spacing={2} direction="row">
                <Grid container item direction="column">
                  <Grid item>
                    <GroupOutlinedIcon />
                  </Grid>
                  <Grid item>
                    <Typography>Customers</Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography>6035</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Card
              sx={{
                minWidth: 359,
                height: 98,
                boxShadow: "none",
                backgroundColor: "#0064D9",
                border: "none",
                borderRadius: 2,
              }}
            >
              <Grid container spacing={2} direction="row">
                <Grid container item direction="column">
                  <Grid item>
                    <GroupOutlinedIcon />
                  </Grid>
                  <Grid item>
                    <Typography>Customers</Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography>6035</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Box
          sx={{ width: "100%", backgroundColor: "#FFFFFF", paddingBottom: 2 }}
        >
          <Grid container direction="row" justifyContent="space-between">
            <Typography item>Lead Sales</Typography>
            <InfoOutlinedIcon item />
          </Grid>
          <Grid container direction="row" spacing={2}>
            <Typography item>All Time</Typography>
            <Typography item>This Year</Typography>
            <Typography item>This Week</Typography>
            <Typography item>Today</Typography>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default DashBoard;
