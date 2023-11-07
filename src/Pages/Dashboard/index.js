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

import Customer from "../Customerlist";
import Cards from "../../components/cards";

const buttonTexts = [
  {
    label: "All time",
  },
  {
    label: "This year",
  },
  {
    label: "This week",
  },
  {
    label: "Today",
  },
];

const cardsData = [
  {
    avatarimg: (
      <PeopleAltOutlinedIcon fontSize="large" sx={{ color: "#FFFFFF" }} />
    ),
    title: "Customers",
    value: "6035",
  },
  {
    avatarimg: (
      <DescriptionOutlinedIcon fontSize="large" sx={{ color: "#FFFFFF" }} />
    ),
    title: "Invoice",
    value: "19",
  },
  {
    avatarimg: (
      <BugReportOutlinedIcon fontSize="large" sx={{ color: "#FFFFFF" }} />
    ),
    title: "Issues",
    value: "10",
  },
];

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
          "&.MuiContainer-root": {
            backgroundColor: "#F7FBFF",
            padding: 0,
          },
        }}
      >
        <Cards data={cardsData} />
      </Container>
      <Container
        maxWidth="lg"
        sx={{
          "&.MuiContainer-root": {
            marginTop: "20px",
            pl: 0,
            pr: 0,
          },
        }}
      >
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
            <Typography variant="subtitle1" sx={{ color: "#6B7584" }} item>
              Lead Sales
            </Typography>
            <InfoOutlinedIcon item />
          </Grid>
          <Box sx={{ display: "flex", direction: "row", gap: "17px" }}>
            {buttonTexts.map((item, index) => {
              return (
                <Button
                  onClick={() => handlActive(`${item.label}`)}
                  sx={{
                    color:
                      activeButton === `${item.label}` ? "#0054d9" : "#B3B8BD",
                    backgroundColor:
                      activeButton === `${item.label}` ? "#DEECFB" : "white",
                    "&:hover": {
                      backgroundColor:
                        activeButton === `${item.label}` ? "#DEECFB" : "white",
                    },
                    textTransform: "none",
                    padding: 0,
                  }}
                >
                  <Typography sx={{ padding: "4px 14px" }}>
                    {item.label}
                  </Typography>
                </Button>
              );
            })}
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
      </Container>
    </>
  );
};

export default DashBoard;
