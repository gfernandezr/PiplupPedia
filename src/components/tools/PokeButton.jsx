import Button from "@mui/material/Button";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/theme";

function PokeButton({ text }) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained"> {text} </Button>
    </ThemeProvider>
  );
}

export default PokeButton;
