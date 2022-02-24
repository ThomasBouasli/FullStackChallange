import { Box } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Page(props) {

  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: isMobile ? "70vh" : "85vh",
        width: "100vw",
        padding: isMobile ? "10vh 0 20vh" : "5vh 0 10vh",
        margin: "0 0",
        backgroundImage: `url(https://i.ibb.co/gDyMJ13/541732.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "50%",
        backgroundPosition: isMobile ? props.position : "-60% -20%",
        backgroundOrigin: "padding-box",
        maxWidth: "100vw",
      }}

      maxWidth="xl"
    >
      {props.children}
    </Box>
  );
}
