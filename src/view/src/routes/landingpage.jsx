import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


import Page from "../components/Page";
import useAuth from "../hooks/useAuth";

export default function LandingPage() {

  useAuth();

  return (
    <Page position="150% -10%">
      <h1>Cookie Store</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          sx={{ paddingX: "3rem", marginY: "1rem", backgroundColor: "#D5A150" }}
          size="large"
          variant="contained"
          color="primary"
          component={Link}
          to="/login"
        >
          Log In
        </Button>
        <Button
          sx={{ paddingX: "3rem", marginY: "1rem", backgroundColor: "#BF8A4C" }}
          size="large"
          variant="contained"
          component={Link}
          to="/signin"
        >
          Sign In
        </Button>
      </Box>
    </Page>
  );
}
