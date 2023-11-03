import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  TextField,
  Avatar,
  TablePagination,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CustomerListApi } from "../../Services/CustomerListApi";

const dpURL = "/assets/Oval.png";

const columns = [
  { field: "id", headerName: "ID", flex: 0.1 },
  { field: "updated_at", headerName: "Date / Time", flex: 0.5 },
  {
    field: "fullname",
    headerName: "Name",
    flex: 1.4,
    editable: true,
    renderCell: (params) => (
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Avatar alt={`${params.row.name}`} src={dpURL} />
        <Typography variant="body1" style={{ marginLeft: "8px" }}>
          {params.row.fullname}
        </Typography>
      </Box>
    ),
  },
  { field: "username", headerName: "Email", flex: 0.4 },
  { field: "mobile_no", headerName: "Phone", flex: 0.4 },
  {
    renderCell: () => (
      <Button sx={{ color: "#000" }}>
        <MoreVertOutlinedIcon />
      </Button>
    ),
    flex: 0.2,
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
            <Typography variant="h6">Customer List</Typography>
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
