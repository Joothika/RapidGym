import React from "react";
import { useExerciseContext } from "../services/ExerciseContext";
import { useYoutubeContext } from "../services/YoutubeContext";

const ErrorPage = () => {
  const { error } = useExerciseContext();
  const { serrorInYoutube } = useYoutubeContext();
  return (
    <div className="flex justify-center items-center md:text-lg text-sm text-red-500">
      {error || serrorInYoutube}
    </div>
  );
};

export default ErrorPage;
