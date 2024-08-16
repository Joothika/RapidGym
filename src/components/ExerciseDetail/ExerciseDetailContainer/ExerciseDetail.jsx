import React from "react";
import { ExerciseDetailContent, ExerciseDetailGIF } from "../../index";
import useFetchExerciseDetail from "../../../services/useFetchExerciseDetail";
import ShimmerDetail from "../../../utils/ShimmerDetail";
import { useExerciseContext } from "../../../services/ExerciseContext";

const ExerciseDetail = () => {
  useFetchExerciseDetail();
  const { loading } = useExerciseContext();
  return (
    <>
      {loading && <ShimmerDetail />}
      <section className="grid grid-rows-1  grid-flow-row auto-rows-min  md:grid-cols-12   md:h-[70vh]  lg:h-[80vh] xl:max-w-[1400px] lg:max-w-[1000px] md:max-w-[780px] sm:max-w-[600px] max-w-[360px] mx-auto ">
        <ExerciseDetailGIF />
        <ExerciseDetailContent />
      </section>
    </>
  );
};

export { ExerciseDetail };
