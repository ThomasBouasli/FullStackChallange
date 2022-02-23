import { Box } from "@mui/material";

export default function Page(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: "70vh",
        width: "100vw",
        padding: "10vh 0 20vh",
        margin: "0 0",
        backgroundImage: `url(https://i.ibb.co/gDyMJ13/541732.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "50%",
        backgroundPosition: props.position,
        backgroundOrigin: "padding-box",
        maxWidth: "100vw",
      }}

      maxWidth="xl"
    >
      {props.children}
    </Box>
  );
}
