import EQUIPMENTLOGO from "../assets/equipment.png";
import BODYPARTLOGO from "../assets/body-part.png";
import TARGETLOGO from "../assets/target.png";

export const EXERCISE_DETAIL_LOGO = [BODYPARTLOGO, TARGETLOGO, EQUIPMENTLOGO];
export const EXERCISE_BG_CONTENT = [
  " Build Your Body Strong",
  "Having a perfect body requires a lots of traning. RapidGym provides a great opportunity to shape your body. Make your life fit and healthy with perfect shape!",
  "Explore",
];
export const BODYPART_HEAD = "Body Part";
export const EQUIPMENT_HEAD = "Equipment";
export let settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

export const exercisePerPage = 10;

export const CATEGORY_IMG = `https://i.pinimg.com/736x/3d/30/bf/3d30bf0c579fa14498b8b03ef53067f0.jpg`;

export const YOUTUBE_VIDEO_URL = `https://www.youtube.com/watch?v=`;

export const EXERCISE_URL = `https://exercisedb.p.rapidapi.com/exercises`;

export const YOUTUBE_URL = `https://youtube-search-and-download.p.rapidapi.com`;

export const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_APIKEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_APIKEY,
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};
