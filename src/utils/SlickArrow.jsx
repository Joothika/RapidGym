import React from "react";
import { Button } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const SlickArrow = ({ sliderRef, addCss }) => {
  return (
    <div className={`flex justify-end mb-2 lg:my-5 ${addCss}`}>
      <Button onClick={() => sliderRef.current.slickPrev()}>
        <ArrowCircleLeftIcon
          sx={{
            fontSize: { lg: "1.7rem" },
            cursor: "pointer",
            color: "#00308f  ",
          }}
        />
      </Button>
      <Button onClick={() => sliderRef.current.slickNext()}>
        <ArrowCircleRightIcon
          sx={{
            fontSize: { lg: "1.7rem" },
            cursor: "pointer",
            color: "#00308f ",
          }}
        />
      </Button>
    </div>
  );
};

export { SlickArrow };
