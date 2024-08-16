import React from "react";
import Slider from "react-slick";
import { CATEGORY_IMG, settings } from "../../utils/textConstants";
import { useExerciseContext } from "../../services/ExerciseContext";
import { SlickArrow } from "../../utils/SlickArrow";
import Spinner from "../../utils/Spinner";

const Categories = () => {
  const { categories, handleBodyPartClick, sliderRef } = useExerciseContext();
  return (
    <div className="xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[780px] sm:max-w-[600px] max-w-[360px] my-[0.5rem] sm:my-[3.5rem]  md:my-[4rem]  mx-auto ">
      <SlickArrow sliderRef={sliderRef} />
      {categories.length > 0 ? (
        <Slider {...settings} ref={sliderRef}>
          {categories?.map((each, i) => (
            <figure
              className="md:mx-4  lg:mx-4 xl:mx-8 mx-2 max-w-[10rem]   md:max-w-[10rem]   lg:max-w-[12rem]  xl:max-w-[15rem]  border py-4   md:py-2  lg:py-5 xl:py-10 rounded-md shadow-md border-purple-400 shadow-purple-300 cursor-pointer hover:border-t-4"
              key={`sample-${i}`}
              onClick={() => {
                return handleBodyPartClick(each);
              }}
            >
              <img
                src={CATEGORY_IMG}
                className="w-20 h-20 md:w-28 md:h-28 object-cover  mx-auto"
              />
              <figcaption className="text-lg font-acme tracking-wide  text-center mt-1  md:mt-4">
                {`${each?.charAt(0).toUpperCase()}${each?.slice(1)}`}
              </figcaption>
            </figure>
          ))}
        </Slider>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export { Categories };
