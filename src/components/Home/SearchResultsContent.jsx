import React from "react";
import { exercisePerPage } from "../../utils/textConstants";
import { ToUpperCase } from "../../utils/ToUpperCase";
import { useExerciseContext } from "../../services/ExerciseContext";
import { Link } from "react-router-dom";
import Spinner from "../../utils/Spinner";
import NoResultDisplay from "../../utils/NoResultDisplay";

const SearchResultsContent = () => {
  const { exercises, currentPage, loading } = useExerciseContext();
  const lastIndexExercise = currentPage * exercisePerPage;
  const firstIndexExercise = lastIndexExercise - exercisePerPage;
  if (exercises.length === 0) {
    return <NoResultDisplay>No results found !</NoResultDisplay>;
  }
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="grid grid-cols-12  gap-y-24 sm:gap-y-24 sm:gap-x-14  md:gap-y-32  lg:gap-y-40 place-items-center justify-center">
      {exercises.length > 0 &&
        exercises
          ?.slice(firstIndexExercise, lastIndexExercise)
          ?.map((exercise) => (
            <Link
              to={`/${exercise?.id}`}
              className="col-span-12 sm:col-span-6 w-[20rem] sm:w-[18rem]  md:w-[20rem] lg:w-[22rem]  xl:w-[25rem] py-6 px-8 border-t-4 border-t-violet-700  bg-purple-50 hover:scale-105 hover:transition-transform hover:duration-300 hover:delay-100 hover:ease-in-out cursor-pointer"
              key={exercise.id}
            >
              <div>
                <img
                  src={exercise?.gifUrl}
                  className="  md:h-56  lg:h-64 xl:h-72 mx-auto"
                />

                <ul className="grid grid-cols-6 gap-x-12 my-6  sm:gap-x-10  sm:my-8  lg:my-10  xl:my-6 md:gap-10  lg:gap-12  xl:gap-14">
                  <li className="bg-yellow-500/70  px-1  py-2  xl:py-2 rounded-full font-inter text-center text-stone-100  text-[0.7rem] sm:text-xs  xl:text-sm col-span-3">
                    {exercise?.bodyPart}
                  </li>
                  <li className="bg-red-500/70 px-1  py-2  xl:py-2 rounded-full font-inter text-center text-stone-100 text-[0.7rem] sm:text-xs xl:text-sm col-span-3">
                    {exercise?.target}
                  </li>
                </ul>
                <h2 className="font-merri font-semibold  text-sm  md:text-[0.85rem] lg:text-lg my-4  sm:my-6  md:my-4">
                  {ToUpperCase(exercise?.name)}
                </h2>
              </div>
            </Link>
          ))}
    </div>
  );
};

export { SearchResultsContent };
