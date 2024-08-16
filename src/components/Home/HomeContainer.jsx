import React from "react";
import HOME_BACKGROUND from "../../assets/HOME_BG.jpg";
import { ExerciseContainer, HomeContent } from "../index";

const HomeContainer = () => {
  return (
    <>
      <div className="relative  before:absolute before:z[-1]  before:bg-gradient-to-b before:from-black/50 before:to-purple-500/30 before:w-full before:h-screen">
        <img src={HOME_BACKGROUND} className="h-screen w-full object-cover" />
        <HomeContent />
      </div>
      <ExerciseContainer />
    </>
  );
};

export { HomeContainer };
