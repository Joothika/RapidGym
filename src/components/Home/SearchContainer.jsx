import React from "react";
import { SearchResultsBody, SearchResultsHeader } from "../index";
const SearchContainer = () => {
  return (
    <>
      <section className="lg:max-w-[1000px] md:max-w-[780px] sm:max-w-[600px] max-w-[360px] my-[0.5rem] sm:my-[3.5rem]  md:my-[4rem]  xl:max-w-[1300px]  mx-auto">
        <SearchResultsHeader />
        <SearchResultsBody />
      </section>
    </>
  );
};

export { SearchContainer };
