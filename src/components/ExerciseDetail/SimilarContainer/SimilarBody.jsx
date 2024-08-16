import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { settings } from "../../../utils/textConstants";
import { ToUpperCase } from "../../../utils/ToUpperCase";
import { useExerciseContext } from "../../../services/ExerciseContext";
import { SlickArrow } from "../../../utils/SlickArrow";

const SimilarBody = ({ similar, sliderRef }) => {
  if (!similar) return;
  return (
    <div className=" mt-2 sm:mt-4 md:mt-6 xl:mt-10 ">
      <SlickArrow sliderRef={sliderRef} addCss={"hidden sm:flex"} />
      {similar.length > 0 && (
        <Slider {...settings} className="pb-1" ref={sliderRef}>
          {similar?.map((exercise) => (
            <Link
              to={`/${exercise?.id}`}
              className="max-w-[10.5rem] md:mr-4 lg:mr-4 xl:mr-8 mr-2 sm:max-w-[12rem] md:max-w-[15.5rem] lg:max-w-[19rem] xl:max-w-[20rem]  h-[20vh] sm:h-[38vh]  md:h-[42vh]  lg:h-[50vh] xl:h-[53vh]  hover:md:border-4 hover:md:border-violet-500/50 hover:transition-transform hover:duration-300 hover:delay-100 hover:ease-in-out cursor-pointer py-6 rounded-md md:border-2 px-2"
              key={exercise.id}
              onClick={() => window.scrollTo({ top: "0", behavior: "instant" })}
            >
              <div>
                <img
                  src={exercise?.gifUrl}
                  className="  md:h-56  lg:h-64 xl:h-72 mx-auto"
                />
                <h2 className="font-inter sm:font-merri sm:font-semibold  text-[0.6rem] sm:text-xs md:text-[0.65rem] lg:text-sm my-4  sm:my-6  md:my-4  text-center tracking-wide">
                  {ToUpperCase(exercise?.name)}
                </h2>
              </div>
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
};

export { SimilarBody };
