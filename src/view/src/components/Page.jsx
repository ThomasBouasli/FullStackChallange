import { Box } from "@mui/system";

export default function Page(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(https://i.ibb.co/gDyMJ13/541732.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "50%",
        backgroundPosition: props.position,
      }}
    >
      {props.children}
    </Box>
  );
}
