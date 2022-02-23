import { TextField, Box, Button, Alert } from "@mui/material";
import Page from "../components/Page";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";


export default function LogIn() {

  const [loginError , setLoginError] = useState(null);

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


    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location = "/";
    }else{
      setLoginError(data);
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
          required
          sx={{ margin: "1rem", width: "100%" }}
        />
        <TextField
          name="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          required
          sx={{ margin: "1rem" , width: "100%"}}
        />
        {
          loginError ? <Alert severity="error">{loginError}</Alert> : null
        }
        <Button
          color="success"
          variant="contained"
          type="submit"
          sx={{ marginTop: "3rem" }}
        >
          Submit
        </Button>
        <Button
          color="warning"
          variant="contained"
          type="submit"
          sx={{ marginY: "2rem" }}
          component={Link}
          to="/"
        >
          Back
        </Button>
      </form>
    </Page>
  );
}
