import { useState, useEffect } from "react";
import Page from "../components/Page";

import useMediaQuery from "@mui/material/useMediaQuery";

import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";

export default function Home() {
  const [cookies, setCookies] = useState(null);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    fetchData();

    async function fetchData() {
      const result = await fetch("/api/products", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
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
      <Box
        sx={{
          overflowY: "auto",
          padding: "0px 5%",
          boxSizing: "border-box",
          height: isMobile ? "auto" : "100%",
        }}
      >
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
            <Cookie key={cookie.id} imgSrc={cookie.image} name={cookie.name} price={cookie.price} />
          ))
        )}
      </Box>
      <Button
        sx={{ paddingX: "3rem", marginY: "1rem", backgroundColor: "#D5A150" }}
        size="large"
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

function Cookie({ imgSrc, name, price, id }) {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div
    key={id}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "4px 4px 0px #000000",
        padding: "0.5rem 2rem",
        borderRadius: "0.5rem",
        margin: isMobile ? "2rem 0px" : "3rem 0px",
        width: isMobile ? "auto" : "min(35vw, 300px)",
      }}
    >
      <img
        src={imgSrc}
        alt={name}
        style={{ height: "40px", marginRight: "1rem" }}
      />
      <span>{name}</span>
      {
        isMobile ? null : <span>{price}</span>
      }
    </div>
  );
}
