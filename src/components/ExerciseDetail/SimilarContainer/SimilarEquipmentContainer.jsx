import React, { useEffect } from "react";
import { useExerciseContext } from "../../../services/ExerciseContext";
import { SimilarBody, SimilarHeader } from "../../index";
import { EQUIPMENT_HEAD } from "../../../utils/textConstants";
import ShimmerSimilar from "../../../utils/ShimmerSimilar";

const SimilarEquipmentContainer = () => {
  const { exerciseDetail, equipment, fetchEquipment, equipmentRef } =
    useExerciseContext();
  useEffect(() => {
    fetchEquipment(exerciseDetail?.equipment);
    return () => fetchEquipment;
  }, [exerciseDetail?.equipment]);
  if (!equipment) return <ShimmerSimilar />;

  return (
    <section className=" xl:max-w-[1400px] lg:max-w-[1200px] md:max-w-[780px] sm:max-w-[600px] max-w-[360px] mx-auto xl:mt-16  sm:my-10 lg:my-10  lg:px-10">
      <SimilarHeader>
        {EQUIPMENT_HEAD} {exerciseDetail?.equipment}
      </SimilarHeader>
      <SimilarBody similar={equipment} sliderRef={equipmentRef} />
    </section>
  );
};

export { SimilarEquipmentContainer };
