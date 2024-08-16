import React from "react";
import { YoutubeBody, YoutubeHeader } from "../../index";

const YoutubeContainer = () => {
  return (
    <section className=" xl:max-w-[1400px] lg:max-w-[1200px] md:max-w-[780px] sm:max-w-[600px] max-w-[360px] mx-auto xl:mt-16 mt-8 sm:mt-12 lg:mt-10  lg:px-10 ">
      <YoutubeHeader />
      <YoutubeBody />
    </section>
  );
};

export { YoutubeContainer };
