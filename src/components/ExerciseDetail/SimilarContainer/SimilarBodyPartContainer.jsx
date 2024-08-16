import React, { useEffect } from "react";
import { SimilarBody, SimilarHeader, SlickArrow } from "../../index";
import { useExerciseContext } from "../../../services/ExerciseContext";
import { BODYPART_HEAD } from "../../../utils/textConstants";
import ShimmerSimilar from "../../../utils/ShimmerSimilar";

const SimilarBodyPartContainer = () => {
  const { exerciseDetail, bodyParts, fetchBodyPart, bodyPartRef } =
    useExerciseContext();
  useEffect(() => {
    fetchBodyPart(exerciseDetail?.bodyPart);
    return () => fetchBodyPart;
  }, [exerciseDetail?.bodyPart]);
  if (!bodyParts) return <ShimmerSimilar />;
  return (
    <section className=" xl:max-w-[1400px] lg:max-w-[1200px] md:max-w-[780px] sm:max-w-[600px] max-w-[360px] mx-auto xl:mt-16  sm:my-10 lg:my-10  lg:px-10">
      <SimilarHeader>
        {BODYPART_HEAD} {exerciseDetail?.bodyPart}
      </SimilarHeader>
      <SimilarBody similar={bodyParts} sliderRef={bodyPartRef} />
    </section>
  );
};

export { SimilarBodyPartContainer };
