import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  TextField,
  Avatar,
  TablePagination,
  MenuItem,
  IconButton,
  Menu,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CustomerListApi } from "../../Services/CustomerListApi";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const dpURL = "/assets/Oval.png";

// const columns = [
//   { field: "userid", headerName: "ID", flex: 0.1 },
//   { field: "updated_at", headerName: "Date / Time", flex: 0.5 },
//   {
//     field: "fullname",
//     headerName: "Name",
//     flex: 1.4,
//     editable: true,
//     renderCell: (params) => (
//       <Box style={{ display: "flex", alignItems: "center" }}>
//         <Avatar alt={`${params.row.firstname}`} src={dpURL} />
//         <Typography variant="body1" style={{ marginLeft: "8px" }}>
//           {params.row.firstname} + {params.row.lastname}
//         </Typography>
//       </Box>
//     ),
//   },
//   { field: "email", headerName: "Email", flex: 0.4 },
//   { field: "mobilenumber", headerName: "Phone", flex: 0.4 },
//   {
//     renderCell: () => (
//       <Button sx={{ color: "#000" }}>
//         <MoreVertOutlinedIcon />
//       </Button>
//     ),
//     flex: 0.2,
//   },
// ];

const options = ["Edit", "Delete"];

const columns = [
  {
    field: "userid",
    headerName: "ID",
    // width: 90,
    valueGetter: (params) => `# ${params.row.userid || ""}`,
    flex: 0.1,
  },
  {
    field: "updated_at",
    headerName: "Date/Time",
    type: "number",
    // width: 200,
    flex: 0.5,
  },
  {
    field: "fullname",
    headerName: "Full Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    // width: 300,
    flex: 1.4,

    renderCell: (params) => (
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt={`${params.row.firstname} ${params.row.lastname}`}
          src={dpURL}
        />
        <Typography variant="body1" style={{ marginLeft: "8px" }}>
          {params.row.firstname} {params.row.lastname}
        </Typography>
      </Box>
    ),
  },
  {
    field: "contactDetails",
    headerName: "Contact Details",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    // width: 150,
    flex: 0.4,

    valueGetter: (params) => `${params.row.mobilenumber || ""}`,
  },
  {
    field: "email",
    headerName: "Email",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    // width: 300,
    flex: 0.4,
    valueGetter: (params) => `${params.row.email || ""}`,
  },
  {
    field: "actions",
    headerName: "",
    sortable: false,
    flex: 0.2,

    renderCell: (params) => (
      <Box marginLeft={"auto"}>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-haspopup="true"
          sx={{ marginLeft: "auto" }}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu>
          {options.map((option) => (
            <MenuItem key={option} selected={option === "Pyxis"}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    ),
  },
];

const Customer = ({ show = true, limitDatagridRows }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userCount, setUserCount] = useState();
  const [searchCount, setSearchCount] = useState();

  const [page, setPage] = useState(0); // start from page 0
  const [rowsPerPage, setRowsPerPage] = useState(10); // shows number of rows per page

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const start = page * rowsPerPage;
        const limit = rowsPerPage;
        // console.log(page + 1, rowsPerPage, "data sent to api");
        CustomerListApi.getAllUsers(
          start,
          limit,
          searchQuery,
          (data) => {
            if (data && data.records) {
              setUserCount(data.count);
              console.log("user count", data.count);

              setUsers(data.records);
            } else {
              console.log("Invalid data received from the server.");
            }
          },
          (error) => {
            console.log(error);
          }
        );
        // console.log("get req 2", data);
      } catch (error) {
        // console.log(error);
        setError(error.message);
      }
    };

    fetchData();
  }, [page, rowsPerPage, searchQuery]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Container
        sx={{
          "&.MuiContainer-root": {
            pl: 0,
            pr: 0,
            mt: show ? "65px" : "20px",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: 4,
            pt: 2.6,
            pl: 3,
            pr: 3.9,
            mb: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
              color: "#6B7584",
            }}
          >
            <Typography variant="subtitle1">Customer List</Typography>
            {show ? (
              ""
            ) : (
              <Link
                to="/Customer"
                variant="text"
                sx={{ color: "#6B7584" }}
                style={{ color: "#6B7584", textDecoration: "none" }}
              >
                View All
              </Link>
            )}
          </Box>
          <Divider sx={{ mb: 3 }} />
          {show && (
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
              value={searchQuery}
              onInput={(e) => setSearchQuery(e.target.value)}
            />
          )}
          <div style={{ height: "auto", width: "100%" }}>
            <DataGrid
              rows={users}
              columns={columns}
              getRowId={(row) => row.userid}
              border="none"
              autoHeight={true}
              initialState={{
                pagination: {
                  paginationModel: {
                    page: page,
                    pageSize: rowsPerPage,
                  },
                },
              }}
              pageSizeOptions={""}
              checkboxSelection
              disableRowSelectionOnClick
              hideFooterPagination={true}
            />
          </div>
          <TablePagination
            component="div"
            count={userCount}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={
              rowsPerPage
              // show ? rowsPerPage === 10 : rowsPerPage === 5
            }
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[3, 5, 10]}
            sx={{
              display: show ? "block" : "none",
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default Customer;
