import React from "react";
import { useExerciseContext } from "../../../services/ExerciseContext";

const ExerciseDetailGIF = () => {
  const { exerciseDetail } = useExerciseContext();

  return (
    <div className="row-span-1  md:col-span-6 ">
      <img
        src={exerciseDetail?.gifUrl}
        className=" w-full md:h-[60vh] xl:w-[80%]  lg:h-[80vh] mx-auto"
      />
    </div>
  );
};

export { ExerciseDetailGIF };
