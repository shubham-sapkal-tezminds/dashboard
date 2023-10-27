import { Typography, Container } from "@mui/material";

const Customer = () => {
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
        <Typography sx={{ margin: "500px" }}>Customer List</Typography>
      </Container>
    </>
  );
};

export default Customer;
