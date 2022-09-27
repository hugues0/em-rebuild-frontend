import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import RedditIcon from "@mui/icons-material/Reddit";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <Container sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Container
        maxWidth="md"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Paper elevation={20} sx={{ width: "100%" }}>
          <Box
            gap={3}
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Stack
              direction="column"
              gap={3}
              sx={{ display: "flex", justifyContent: "center", flexGrow: "1" }}
            >
              <RedditIcon fontSize="large" sx={{ alignSelf: "center" }} />
              <Typography variant="h5" gutterBottom>
                Please proceed to login
              </Typography>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Stack
              direction="column"
              gap={2}
              sx={{
                display: "flex",
                flexGrow: "1",
                justifyContent: "center",
                margin: "50px",
              }}
            >
              <TextField label="Email" type="email" variant="outlined" />
              <TextField label="Password" type="password" variant="outlined" />

              <Button
                onClick={handleLogin}
                variant="outlined"
                sx={{ width: "40%", alignSelf: "center" }}
              >
                Login
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Container>
  );
};

export default Login;
