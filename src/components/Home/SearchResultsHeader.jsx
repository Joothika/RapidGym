import React from "react";
import { useExerciseContext } from "../../services/ExerciseContext";

const SearchResultsHeader = () => {
  const { exerciseRef } = useExerciseContext();

  return (
    <header
      className="lg:mt-32 xl:mb-32  lg:mb-28 md:mt-24 md:mb-24 sm:mt-20 sm:mb-20 px-2 my-16"
      ref={exerciseRef}
    >
      <h1 className="font-inter text-2xl  sm:text-[1.5rem] md:text-2xl lg:text-2xl xl:text-3xl tracking-wide font-semibold">
        Search Results
      </h1>
    </header>
  );
};

export { SearchResultsHeader };
