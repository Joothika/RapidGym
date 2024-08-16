import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
const NoResultDisplay = ({ children }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <SentimentVeryDissatisfiedIcon
          sx={{ fontSize: { xs: "2rem", lg: "2.5rem" }, color: "#cc0000 " }}
        />
        <h1 className=" font-inter font-medium text-gray-400  text-sm sm:text-lg tracking-wide mt-4">
          {children}
        </h1>
      </div>
    </>
  );
};

export default NoResultDisplay;
