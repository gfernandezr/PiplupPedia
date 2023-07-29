import { NavLink } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/theme";

function HomeButton() {
  return (
    <NavLink to="/home">
      <ThemeProvider theme={theme}>
        <IconButton color="primary">
          <HomeRoundedIcon />
        </IconButton>
      </ThemeProvider>
    </NavLink>
  );
}

export default HomeButton;
