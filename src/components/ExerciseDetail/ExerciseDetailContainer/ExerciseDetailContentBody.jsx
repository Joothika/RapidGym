import React from "react";
import { EXERCISE_DETAIL_LOGO } from "../../../utils/textConstants";
import { useExerciseContext } from "../../../services/ExerciseContext";

const ExerciseDetailContentBody = () => {
  const { exerciseDetail } = useExerciseContext();
  const extraDetail = [
    { id: 1, icon: EXERCISE_DETAIL_LOGO.at(0), name: exerciseDetail?.bodyPart },
    { id: 2, icon: EXERCISE_DETAIL_LOGO.at(1), name: exerciseDetail?.target },
    {
      id: 3,
      icon: EXERCISE_DETAIL_LOGO.at(2),
      name: exerciseDetail?.equipment,
    },
  ];
  return (
    <ul className="flex justify-around flex-row md:flex-col  my-6 sm:my-10  md:my-6 lg:my-8 xl:my-10 lg:px-2  md:h-[18rem] lg:h-[20rem]  xl:h-[23rem]">
      {extraDetail.map((eachextraDetail) => (
        <li
          className="flex flex-col justify-between items-center md:flex-row md:items-center md:justify-start "
          key={eachextraDetail.id}
        >
          <img
            src={eachextraDetail?.icon}
            className="bg-yellow-400/20 px-3 py-3 rounded-full w-12  sm:w-14 lg:w-16 xl:w-20"
          />
          <h3 className="font-inter capitalize font-medium tracking-wide text-xs  sm:text-[1rem] xl:text-xl mt-3 md:mt-0 md:ml-4 lg:ml-6">
            {eachextraDetail?.name}
          </h3>
        </li>
      ))}
    </ul>
  );
};

export { ExerciseDetailContentBody };
