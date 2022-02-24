import { Button as ButtonMUI } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

export function Button({ to, type, children }) {
  const classes = useStyles();
  let color;

  switch (type) {
    case "primary":
      color = classes.primary;
      break;
    case "secondary":
      color = classes.secondary;
      break;
    default:
      color = classes.primary;
      break;
  }

  return (
    <ButtonMUI
      className={classes.button + " " + color}
      size="large"
      variant="contained"
      color="primary"
      component={Link}
      to={to}
    >
      {children}
    </ButtonMUI>
  );
}

export function SubmitButton({ type, children }) {
  const classes = useStyles();
  let color;

  switch (type) {
    case "primary":
      color = classes.primary;
      break;
    case "secondary":
      color = classes.secondary;
      break;
    default:
      color = classes.primary;
      break;
  }

  return (
    <ButtonMUI
      className={classes.button + " " + color}
      size="large"
      variant="contained"
      color="primary"
      type="submit"
    >
      {children}
    </ButtonMUI>
  );
}

export function HandledButton({ type, children, onClick }) {
  const classes = useStyles();
  let color;

  switch (type) {
    case "primary":
      color = classes.primary;
      break;
    case "secondary":
      color = classes.secondary;
      break;
    default:
      color = classes.primary;
      break;
  }

  return (
    <ButtonMUI
      className={classes.button + " " + color}
      size="large"
      variant="contained"
      color="primary"
      onClick={onClick}
    >
      {children}
    </ButtonMUI>
  );
}

const useStyles = makeStyles({
  button: {
    padding: "0.7rem 4rem",
    margin: "1rem",
  },
  primary: {
    backgroundColor: "#D5A150",
  },
  secondary: {
    backgroundColor: "#BF8A4C",
  },
});
