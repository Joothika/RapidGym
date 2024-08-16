import {
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useExerciseContext } from "../../services/ExerciseContext";

const SearchBar = () => {
  const { search, setSearch, handleSearchClick, searchRef, searchResultsRef } =
    useExerciseContext();
  const media = useMediaQuery("(max-width:800px)");

  return (
    <>
      <Grid
        container
        sx={{
          maxWidth: { xs: "360px", sm: "600px", md: "900px", lg: "1300px" },
          margin: { xs: "auto" },
          paddingTop: { xs: "5rem", md: "8rem" },
        }}
        ref={searchRef}
      >
        <Grid item xs={12}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3rem", xl: "3.5rem" },
              letterSpacing: "1px",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Awesome Exercises You must Try
          </Typography>
        </Grid>
        <Grid
          container
          rowSpacing={{ sm: 12 }}
          columnSpacing={{ xs: 1, md: 2, lg: 4 }}
          sx={{
            margin: { xs: "3rem  0.5rem", sm: "0" },
          }}
        >
          <Grid item xs={9} sm={10}>
            <TextField
              variant="outlined"
              fullWidth
              label="start search your exercise..."
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
          </Grid>
          <Grid item xs={3} sm={2}>
            <Button
              variant="contained"
              size="large"
              sx={{
                height: "100%",
                width: { sm: "100%", xs: "0.6rem" },
                backgroundColor: "#5a4fcf  ",
                fontSize: { sm: "0.6rem", lg: "0.7rem" },
                ":hover": { backgroundColor: "black" },
                textAlign: "center",
              }}
              onClick={() => handleSearchClick()}
              ref={searchResultsRef}
            >
              {media ? <SearchIcon sx={{ fontSize: "1.3rem" }} /> : "search"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export { SearchBar };
