import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { settings, YOUTUBE_VIDEO_URL } from "../../../utils/textConstants";
import { useExerciseContext } from "../../../services/ExerciseContext";
import { useYoutubeContext } from "../../../services/YoutubeContext";
import ShimmerSimilar from "../../../utils/ShimmerSimilar";
import { SlickArrow } from "../../../utils/SlickArrow";

const YoutubeBody = () => {
  const { exerciseDetail, youtubeRef } = useExerciseContext();
  const { fetchRelatedVideos, relatedVideos } = useYoutubeContext();
  useEffect(() => {
    fetchRelatedVideos(exerciseDetail?.name);
  }, [exerciseDetail?.name]);
  if (!relatedVideos) return <ShimmerSimilar />;
  return (
    <main className="mt-3 sm:mt-4  lg:mt-6 xl:mt-10 ">
      <SlickArrow sliderRef={youtubeRef} addCss={"hidden sm:flex"} />

      <Slider {...settings} ref={youtubeRef}>
        {relatedVideos &&
          relatedVideos?.map((eachvideo, i) => (
            <Link
              to={`${YOUTUBE_VIDEO_URL}${eachvideo?.video?.videoId}`}
              target="_blank"
              className="max-w-[10rem] md:mr-4 lg:mr-4 xl:mr-8 mr-2 sm:max-w-[12rem] md:max-w-[15.5rem] lg:min-w-[14.5rem] lg:max-w-[19rem] xl:max-w-[20rem]  cursor-pointer md:border-2 lg:border-4  h-max sm:h-[23vh]  md:h-[28vh]  lg:h-[35vh] xl:h-[38vh] rounded-lg"
              key={`video-${i}`}
            >
              <video
                poster={`${eachvideo?.video?.thumbnails[0]?.url}`}
                src={`${YOUTUBE_VIDEO_URL}${eachvideo?.video?.videoId}`}
              />
              <h3 className=" font-inter sm:font-acme  sm:my-2 text-[0.6rem]  sm:text-xs md:text-sm lg:text-[1rem]  lg:my-3 flex justify-center items-center  px-2 sm:px-4 py-1 md:py-0 text-ellipsis overflow-hidden tracking-wide ">
                {eachvideo?.video?.title
                  ? eachvideo?.video?.title
                  : exerciseDetail?.name}
              </h3>
            </Link>
          ))}
      </Slider>
    </main>
  );
};

export { YoutubeBody };
