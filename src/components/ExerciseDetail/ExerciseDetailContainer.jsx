import React from "react";
import {
  ExerciseDetail,
  SimilarBodyPartContainer,
  SimilarEquipmentContainer,
  YoutubeContainer,
} from "../index";
const ExerciseDetailContainer = () => {
  return (
    <section className="mb-4 px-4">
      <ExerciseDetail />
      <YoutubeContainer />
      <SimilarBodyPartContainer />
      <SimilarEquipmentContainer />
    </section>
  );
};

export { ExerciseDetailContainer };
