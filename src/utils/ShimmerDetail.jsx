import React from "react";
import { ShimmerDiv, ShimmerText, ShimmerTitle } from "shimmer-effects-react";

const ShimmerDetail = ({ addCss }) => {
  return (
    <>
      <section
        className={`block  max-w-[360px] sm:max-w-[560px] md:max-w-[780px] lg:max-w-[1000px] xl:max-w-[1300px] md:mt-8 md:grid grid-cols-2 mx-auto ${addCss} `}
      >
        <div className="md:col-span-1">
          <ShimmerDiv
            mode="light"
            height={400}
            width={320}
            rounded={0.5}
            className="block sm:hidden"
          />
          <ShimmerDiv
            mode="light"
            height={400}
            width={560}
            rounded={0.5}
            className="hidden sm:block md:hidden"
          />
          <ShimmerDiv
            mode="light"
            height={500}
            width={350}
            rounded={0.5}
            className="hidden md:block lg:hidden"
          />
          <ShimmerDiv
            mode="light"
            height={550}
            width={450}
            rounded={0.5}
            className="hidden lg:block xl:hidden"
          />
          <ShimmerDiv
            mode="light"
            height={550}
            width={550}
            rounded={0.5}
            className="hidden xl:block"
          />
        </div>
        <div className="md:col-span-1">
          <ShimmerTitle
            mode="light"
            line={1}
            className=" mt-4  w-56 md:w-64 xl:w-72"
          />
          <ShimmerText
            mode="light"
            line={10}
            gap={8}
            className="mt-3 xl:mt-6"
          />
          <div className="flex justify-between md:flex-col sm:w-3/4 mt-2 sm:mt-4">
            <ShimmerDiv
              mode="light"
              height={70}
              width={70}
              rounded={50}
              className="block md:hidden"
            />
            <div className="hidden md:flex md:items-center md:mt-4">
              <ShimmerDiv mode="light" height={70} width={70} rounded={50} />
              <ShimmerTitle line={1} mode="light" className="w-40 ml-6" />
            </div>
            <ShimmerDiv
              mode="light"
              height={70}
              width={70}
              rounded={50}
              className="md:hidden"
            />
            <div className="hidden md:flex md:items-center md:mt-6">
              <ShimmerDiv mode="light" height={70} width={70} rounded={50} />
              <ShimmerTitle line={1} mode="light" className="w-40 ml-6" />
            </div>
            <ShimmerDiv
              mode="light"
              height={70}
              width={70}
              rounded={50}
              className="md:hidden"
            />
            <div className="hidden md:flex md:items-center md:mt-6">
              <ShimmerDiv mode="light" height={70} width={70} rounded={50} />
              <ShimmerTitle line={1} mode="light" className="w-40 ml-6" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShimmerDetail;
