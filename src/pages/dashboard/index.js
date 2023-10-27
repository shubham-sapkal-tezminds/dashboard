import {
  Container,
  Box,
  Typography,
  Paper,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

const DashBoard = () => {
  console.log("Dashboard Page rendered");
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          width: "100%",
          maxWidth: "1118px",
          backgroundColor: "red",
          height: "auto",
          marginTop: "110px",
          marginInline: "auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: "21px",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 359,
              height: 98,
              boxShadow: "none",
              backgroundColor: "#0064D9",
              border: "none",
            }}
          >
            <CardContent></CardContent>
            <CardActions>
              {/* <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
          <Card
            sx={{
              minWidth: 359,
              height: 98,
              boxShadow: "none",
              backgroundColor: "#0064D9",
              border: "none",
            }}
          >
            <CardContent></CardContent>
            <CardActions>
              {/* <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
          <Card
            sx={{
              minWidth: 359,
              height: 98,
              boxShadow: "none",
              backgroundColor: "#0064D9",
              border: "none",
            }}
          >
            <CardContent></CardContent>
            <CardActions>
              {/* <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default DashBoard;
