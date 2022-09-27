import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import { fetchUsers, cleanErrorMessage } from "../redux/actions/userActions";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userReducer);

    useEffect(() => {
      dispatch(fetchUsers());
    }, []);

    const handleClose = (event, reason) => {
       if (reason === "clickaway") {
         return;
       }
       dispatch(cleanErrorMessage());
     };

  return (
    <React.Fragment>
      <Container sx={{ height: "100vh" }}>
        <Stack direction="column">
          <Stack
            direction="row"
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Button
              variant="outlined"
              startIcon={<AddCircleOutlineIcon />}
              sx={{ marginBottom: "40px" }}
            >
              New employee
            </Button>
          </Stack>
          <Stack display="flex" alignItems="center">
            {users.loading && <CircularProgress />}
            {users.users.length !== 0 && (
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  aria-label="simple table"
                  align="left"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>username</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Website</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell component="th" scope="row">
                          {user.name}
                        </TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.website}</TableCell>
                        <TableCell>
                          <Typography
                            variant="caption"
                            sx={{
                              backgroundColor:
                                user.id % 2 === 0 ? "#D5F5E3" : "#F2D7D5",
                              padding: "4px",
                            }}
                          >
                            {user.id % 2 === 0 ? "active" : "inactive"}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <EditSharpIcon sx={{ marginRight: "15px" }} />
                          <VisibilitySharpIcon />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Stack>
        </Stack>
      </Container>
      <Snackbar
        open={users.error}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert severity={users.snackbar.severity} sx={{ width: "100%" }}>
          {users.snackbar.message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default Users;
