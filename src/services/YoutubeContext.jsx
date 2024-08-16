import React, { createContext, useContext, useState } from "react";
import { YOUTUBE_URL, youtubeOptions } from "../utils/textConstants";

const YoutubeContext = createContext();

const YoutubeContextProvider = ({ children }) => {
  const [relatedVideos, setRelatedVideos] = useState(null);
  const [errorInYoutube, setErrorInYoutube] = useState();

  async function fetchRelatedVideos(exercisename) {
    try {
      const response = await fetch(
        `${YOUTUBE_URL}/search?query=${exercisename}`,
        youtubeOptions
      );
      const data = await response.json();
      setRelatedVideos(data.contents);
    } catch (err) {
      setErrorInYoutube(err.message);
    }
  }

  return (
    <YoutubeContext.Provider
      value={{ fetchRelatedVideos, relatedVideos, errorInYoutube }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};

const useYoutubeContext = () => {
  const context = useContext(YoutubeContext);
  return context;
};

export { YoutubeContextProvider, useYoutubeContext };
