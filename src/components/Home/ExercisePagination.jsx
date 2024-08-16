import React from "react";
import { Box, Pagination, Stack } from "@mui/material";
import { exercisePerPage } from "../../utils/textConstants";
import { useExerciseContext } from "../../services/ExerciseContext";

const ExercisePagination = () => {
  const { exercises, currentPage, setCurrentPage, exerciseRef } =
    useExerciseContext();
  function paginate(e, val) {
    setCurrentPage(val);
    window.scrollTo({ top: exerciseRef.current.offsetTop, behavior: "smooth" });
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Stack mt="5rem" mb="5rem" direction="row" alignItems="center">
        {exercises?.length > 10 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="medium"
          />
        )}
      </Stack>
    </Box>
  );
};

export { ExercisePagination };
