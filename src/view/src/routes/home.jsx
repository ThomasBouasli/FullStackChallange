import { useState, useEffect } from "react";
import Page from "../components/Page";

import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";

export default function Home() {
  const [cookies, setCookies] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();

    async function fetchData() {
      const result = await fetch("/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await result.json();

      if (data.error) {
        localStorage.removeItem("token");
        navigate("/");
      } else {
        setCookies(data);
      }
    }
  }, []);

  return (
    <Page position="150% -10%">
      <h1>Cookies</h1>
      <Box sx={{
        overflowY: "auto",
        padding: "0px 5%",
        boxSizing: "border-box",
      }}>
      {cookies == null ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TailSpin color="#D5A150" height={80} width={80} />
          <span>Fetching some Cookies...</span>
        </div>
      ) : (
        cookies.map((cookie) => (
          <Cookie imgSrc={cookie.image} name={cookie.name} />
        ))
      )}
      </Box>
      <Button
        sx={{ paddingX: "3rem", marginY: "1rem" }}
        size="large"S
        variant="contained"
        color="warning"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        Log Out
      </Button>
    </Page>
  );
}

function Cookie({ imgSrc, name }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        boxShadow: "4px 4px 0px #000000",
        padding: "0.5rem 2rem",
        borderRadius: "0.5rem",
        margin: "2rem 0px",
      }}
    >
      <img
        src={imgSrc}
        alt={name}
        style={{ height: "40px", marginRight: "1rem" }}
      />
      <span>{name}</span>
    </div>
  );
}
