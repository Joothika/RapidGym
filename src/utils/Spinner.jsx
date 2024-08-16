import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Spinner = ({ addCss }) => {
  return (
    <div className={`flex justify-center ${addCss}`}>
      <RotatingLines
        visible={true}
        height="50"
        width="50"
        strokeColor="#120a8f"
        strokeWidth="3"
        animationDuration="1"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{ color: "red" }}
      />
    </div>
  );
};

export default Spinner;
