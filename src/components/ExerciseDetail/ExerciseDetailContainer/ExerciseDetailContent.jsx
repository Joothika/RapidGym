import React from "react";
import {
  ExerciseDetailContentHeader,
  ExerciseDetailContentBody,
} from "../../index";
const ExerciseDetailContent = () => {
  return (
    <>
      <div className=" md:col-span-6 sm:h-[40vh] lg:h-[80vh] mx-auto md:pl-8 md:pr-2  lg:pl-0 lg:pr-0 relative">
        <ExerciseDetailContentHeader />
        <ExerciseDetailContentBody />
      </div>
    </>
  );
};

export { ExerciseDetailContent };
