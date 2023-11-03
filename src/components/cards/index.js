import { Grid, Box, Typography } from "@mui/material";

const Cards = ({ data }) => {
  return (
    <>
      <Grid container spacing={2} sx={{ mb: 2.5 }}>
        {data.map((item) => {
          return (
            <Grid item xs={12} md={4} lg={4}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  minWidth: 359,
                  height: 98,
                  boxShadow: "none",
                  backgroundColor: "#0064D9",
                  border: "none",
                  borderRadius: 2,
                  paddingBlock: "19px",
                  paddingInline: "21px",
                }}
              >
                <Box item>
                  <Box>{item.avatarimg}</Box>
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "18px",
                      color: "#FFFFFF",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Box item>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: "#FFFFFF",
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Cards;
