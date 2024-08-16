import React from "react";
import { useExerciseContext } from "../../../services/ExerciseContext";

const ExerciseDetailContentHeader = () => {
  const { exerciseDetail } = useExerciseContext();
  return (
    <>
      <h1 className="font-acme capitalize text-2xl sm:text-3xl my-4 md:text-2xl lg:text-3xl xl:text-4xl sm:my-6 lg:my-8">
        {exerciseDetail?.name}
      </h1>
      <p className="font-inter text-xs leading-5 sm:leading-6  sm:text-sm   xl:text-lg xl:my-4 ">{`Exercises keep you strong ${
        exerciseDetail?.name
      } is one of the best best exercises to target your ${
        exerciseDetail?.target
      }. It will help to improve your ${exerciseDetail?.secondaryMuscles?.at(
        0
      )} and ${exerciseDetail?.secondaryMuscles?.at(1)}}`}</p>
    </>
  );
};

export { ExerciseDetailContentHeader };
