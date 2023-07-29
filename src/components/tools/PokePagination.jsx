import { NavLink } from "react-router-dom";
import { Pagination, PaginationItem } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";

import { theme } from "../styles/theme";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function PokePagination({ pokemon, page, path, query }) {

  return (
    <ThemeProvider theme={theme}>
      <Pagination
        count={pokemon.length}
        size="large"
        page={page}
        color="primary"
        renderItem={(item) => (
          <PaginationItem
            component={NavLink}
            to={ query ? `/${path}/${item.page}?search=${query}` : `/${path}/${item.page}`}
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
            style={
              item.type == "previous" || item.type == "next"
                ? {color: "#f97316",}: {color: "#fff",}
            }
          />
        )}
      />
    </ThemeProvider>
  );
}

export default PokePagination;
