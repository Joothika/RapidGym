import React from "react";
import { ExercisePagination, SearchResultsContent } from "../index";
import { useExerciseContext } from "../../services/ExerciseContext";

const SearchResultsBody = () => {
  const { exercises } = useExerciseContext();

  if (!exercises) return;
  return (
    <main className="xl:my-16 sm:mx-0 ">
      <SearchResultsContent />
      <ExercisePagination />
    </main>
  );
};

export { SearchResultsBody };
