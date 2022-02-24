import Box from "@mui/material/Box";
import { Button } from "../components/Buttons";

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
        <Button to="/login" type="primary">
          Log In
        </Button>
        <Button to="/signin" type="secondary">
          Sign In
        </Button>
      </Box>
    </Page>
  );
}
