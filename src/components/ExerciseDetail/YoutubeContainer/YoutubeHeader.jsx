import React from "react";
import { useExerciseContext } from "../../../services/ExerciseContext";

const YoutubeHeader = () => {
  const { exerciseDetail } = useExerciseContext();

  return (
    <header>
      <h1 className="font-inter font-semibold text-sm sm:text-xl lg:text-2xl  xl:text-3xl">
        Watch{" "}
        <span className="capitalize text-violet-500">
          {exerciseDetail?.name}
        </span>{" "}
        Videos
      </h1>
    </header>
  );
};

export { YoutubeHeader };
