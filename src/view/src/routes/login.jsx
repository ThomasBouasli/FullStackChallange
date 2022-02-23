import { TextField, Box, Button, FormControl } from "@mui/material";
import Page from "../components/Page";
import useAuth from "../hooks/useAuth";


export default function LogIn() {

  useAuth();

  async function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const result = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await result.json();

    if (data.error) {
      alert(data.error);
    }

    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location = "/";
    }

  }

  return (
    <Page position="-70% 10%">
      <h1 style={{ fontSize: "3rem" }}>Log In</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          sx={{ margin: "1rem" }}
        />
        <TextField
          name="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          sx={{ margin: "1rem" }}
        />
        <Button
          color="success"
          variant="contained"
          type="submit"
          sx={{ marginTop: "10rem" }}
        >
          Submit
        </Button>
      </form>
    </Page>
  );
}
