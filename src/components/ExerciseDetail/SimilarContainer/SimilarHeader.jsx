import React from "react";

const SimilarHeader = ({ children }) => {
  return (
    <header className="mt-2 sm:mt-0">
      <h1 className="font-inter font-semibold text-sm sm:text-xl lg:text-2xl  xl:text-3xl">
        Similar <span className="capitalize text-violet-500">{children}</span>{" "}
        group Exercises
      </h1>
    </header>
  );
};

export { SimilarHeader };
