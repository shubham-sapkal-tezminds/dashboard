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
import { getAllUsers } from "../../api/api";
import { useEffect, useState } from "react";

const dpURL = "/images/Oval.png";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "updated_at", headerName: "Date / Time", width: 200 },
  {
    field: "fullname",
    headerName: "Name",
    flex: 1.5,
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
  { field: "username", headerName: "Email", width: 250 },
  { field: "mobile_no", headerName: "Phone", width: 200 },
  {
    renderCell: () => (
      <Button sx={{ color: "#000" }}>
        <MoreVertOutlinedIcon />
      </Button>
    ),
  },
];

const Customer = ({ show = true }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userCount, setUserCount] = useState();

  const [page, setPage] = useState(0); // start from page 0
  const [rowsPerPage, setRowsPerPage] = useState(10); // shows number of rows per page

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(page + 1, rowsPerPage, "data sent to api");
        const data = await getAllUsers(page, rowsPerPage);
        console.log("get req 2", data);
        setUsers(data.records);
        setUserCount(data.count);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, rowsPerPage]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
            />
          )}
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={users}
              columns={columns}
              border="none"
              sx={{
                " &.MuiDataGrid-root": {
                  borderStyle: "none",
                  border: "none",
                  padding: 0,
                },
                "& .MuiDataGrid-footerContainer": {
                  display: show ? "block" : "none",
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
                  paginationModel: { page: page, pageSize: rowsPerPage },
                },
              }}
              pageSizeOptions={""}
              checkboxSelection
              disableRowSelectionOnClick
              hideFooterPagination={true}
            />
          </div>
        </Box>

        <TablePagination
          component="div"
          count={userCount}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[3, 5, 10, 15, 20, 25]}
          sx={{
            display: show ? "block" : "none",
          }}
        />
        {console.log("rows per page", rowsPerPage)}
      </Container>
    </>
  );
};

export default Customer;
