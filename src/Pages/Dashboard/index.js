import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  Skeleton,
} from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";

import { useState } from "react";

import Customer from "../Customerlist/index";

const DashBoard = () => {
  const [activeButton, setAciveButton] = useState("All time");

  const handlActive = (label) => {
    setAciveButton(label);
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          width: "100%",
          maxWidth: "1118px",
          height: "auto",
          marginTop: "60px",
          marginInline: "auto",
          fontFamily: "Poppins, sans-serif !important",
        }}
      >
        <Grid container spacing={2} sx={{ mb: 2.5 }}>
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
                <PeopleAltOutlinedIcon
                  fontSize="large"
                  sx={{ color: "#FFFFFF" }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "18px",
                    color: "#FFFFFF",
                  }}
                >
                  Customers
                </Typography>
              </Box>
              <Box item>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    // fontSize: "18px",
                    color: "#FFFFFF",
                  }}
                >
                  6035
                </Typography>
              </Box>
            </Grid>
          </Grid>
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
                <DescriptionOutlinedIcon
                  fontSize="large"
                  sx={{ color: "#FFFFFF" }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "18px",
                    color: "#FFFFFF",
                  }}
                >
                  Invoice
                </Typography>
              </Box>
              <Box item>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    // fontSize: "18px",
                    color: "#FFFFFF",
                  }}
                >
                  19
                </Typography>
              </Box>
            </Grid>
          </Grid>
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
                <BugReportOutlinedIcon
                  fontSize="large"
                  sx={{ color: "#FFFFFF" }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "18px",
                    color: "#FFFFFF",
                  }}
                >
                  Issues
                </Typography>
              </Box>
              <Box item>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    // fontSize: "18px",
                    color: "#FFFFFF",
                  }}
                >
                  10
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Box
          sx={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            pt: 2.12,
            pb: 3.62,
            pl: 2.87,
            pr: 2.87,
            borderRadius: 2,
            mb: 3.75,
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            sx={{ mb: 2.5 }}
          >
            <Typography sx={{ fontSize: "20px", color: "#6B7584" }} item>
              Lead Sales
            </Typography>
            <InfoOutlinedIcon item />
          </Grid>
          <Box sx={{ display: "flex", direction: "row", gap: "17px" }}>
            <Button
              onClick={() => handlActive("All time")}
              sx={{
                color: activeButton === "All time" ? "#0054d9" : "#B3B8BD",
                backgroundColor:
                  activeButton === "All time" ? "#DEECFB" : "white",
                "&:hover": {
                  backgroundColor:
                    activeButton === "All time" ? "#DEECFB" : "white",
                },
                textTransform: "none",
                padding: 0,
              }}
            >
              <Typography sx={{ padding: "4px 14px" }}>All time</Typography>
            </Button>
            <Button
              onClick={() => handlActive("This year")}
              sx={{
                color: activeButton === "This year" ? "#0054d9" : "#B3B8BD",
                backgroundColor:
                  activeButton === "This year" ? "#DEECFB" : "white",
                "&:hover": {
                  backgroundColor:
                    activeButton === "This year" ? "#DEECFB" : "white",
                },
                textTransform: "none",
                padding: 0,
              }}
            >
              <Typography sx={{ padding: "4px 14px" }}>This year</Typography>
            </Button>
            <Button
              onClick={() => handlActive("This week")}
              sx={{
                color: activeButton === "This week" ? "#0054d9" : "#B3B8BD",
                backgroundColor:
                  activeButton === "This week" ? "#DEECFB" : "white",
                "&:hover": {
                  backgroundColor:
                    activeButton === "This week" ? "#DEECFB" : "white",
                },
                textTransform: "none",
                padding: 0,
              }}
            >
              <Typography sx={{ padding: "4px 14px" }}>This week</Typography>
            </Button>
            <Button
              onClick={() => handlActive("Today")}
              sx={{
                color: activeButton === "Today" ? "#0054d9" : "#B3B8BD",
                backgroundColor: activeButton === "Today" ? "#DEECFB" : "white",
                "&:hover": {
                  backgroundColor:
                    activeButton === "Today" ? "#DEECFB" : "white",
                },
                textTransform: "none",
                padding: 0,
              }}
            >
              <Typography sx={{ padding: "4px 14px" }}>Today</Typography>
            </Button>
          </Box>
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              pl: 2.87,
              pr: 2.87,
              pb: 2,
              mb: 2.5,
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              flexDirection: "row",
              transform: "rotate(180deg)",
              marginInline: "auto",
            }}
          >
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "150px" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "200px" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "300px" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "200px" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "150px" }}
            />{" "}
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "150px" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "200px" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "300px" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "200px" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "150px" }}
            />{" "}
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "150px" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "200px" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "300px" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "200px" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "150px" }}
            />{" "}
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "150px" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "200px" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "300px" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "200px" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ width: "20px", height: "150px" }}
            />
          </Box>
        </Box>

        <Customer show={false} />
        {/* {console.log("rows per page 2", rowsPerPage)} */}

        {/* <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: 4,
            pt: 2.6,
            pl: 3,
            pr: 3.9,
            mb: 4,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Customer List
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <TextField
            variant="outlined"
            placeholder="Search Customer"
            sx={{
              border: "1px solid #BFC0C2",
              borderRadius: 2,
              height: "42px",
              "& .MuiInputBase-root": {
                height: "42px",
              },
              mb: 3.37,
            }}
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: "#BFC0C2" }} />,
            }}
          />
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              border="none"
              sx={{
                " &.MuiDataGrid-root": {
                  borderStyle: "none",
                  border: "none",
                  padding: 0,
                },
                // "&>.MuiDataGrid-main": {
                //   "&>.MuiDataGrid-columnHeaders": {
                //     borderBottom: "none",
                //   },

                //   "& div div div div >.MuiDataGrid-cell": {
                //     borderBottom: "none",
                //   },
                // },
              }}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>
        </Box> */}
      </Container>
    </>
  );
};

export default DashBoard;
