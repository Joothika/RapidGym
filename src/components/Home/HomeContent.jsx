import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { EXERCISE_BG_CONTENT } from "../../utils/textConstants";
import { useExerciseContext } from "../../services/ExerciseContext";

const HomeContent = () => {
  const { searchRef } = useExerciseContext();
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "20%", sm: "30%" },
          left: { md: "5%", xs: "8%" },
          right: { xs: "12%", sm: "20%", md: "30%", lg: "40%" },
          zIndex: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: "3.5rem",
              sm: "4rem",
              md: "3.5rem",
              lg: "4rem",
            },
            fontWeight: { xs: "600" },
            color: "white",
            paddingBottom: "1.5rem",
          }}
        >
          {EXERCISE_BG_CONTENT.at(0)}
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: {
              xs: "0.8rem",
              sm: "0.9rem",
              md: "1rem",
              lg: "1.2rem",
              xl: "1.2rem",
            },
            textAlign: "center",
            color: "white",
            fontWeight: "500",
          }}
        >
          {EXERCISE_BG_CONTENT.at(1)}
        </Typography>
        <Button
          sx={{
            margin: { lg: "3rem 0 0 0", xs: "2.5rem 0 0 0" },
            padding: { lg: "0.8rem 3.5rem", xs: "0.7rem 3rem" },
            fontSize: { xs: "0.7rem", lg: "0.8rem" },
            fontWeight: "500",
            color: "white",
            backgroundColor: "#5a4fcf",
            display: "block",
          }}
          onClick={() =>
            searchRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          {EXERCISE_BG_CONTENT.at(2)}
        </Button>
      </Box>
    </>
  );
};

export { HomeContent };
