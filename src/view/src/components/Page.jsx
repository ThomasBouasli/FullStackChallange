import { Container } from "@mui/material";

export default function Page(props) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100vh",
        width: "100vw",
        padding: "10vh 0 20vh",
        backgroundImage: `url(https://i.ibb.co/gDyMJ13/541732.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "50%",
        backgroundPosition: props.position,
        backgroundOrigin: "padding-box",
      }}

      maxWidth="xl"
    >
      {props.children}
    </Container>
  );
}
