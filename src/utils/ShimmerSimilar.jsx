import React from "react";
import { ShimmerDiv } from "shimmer-effects-react";

const ShimmerSimilar = () => {
  return (
    <>
      <section className="flex justify-between my-4 lg:my-8">
        <ShimmerDiv mode="light" width={175} height={130} rounded={0.5} />
        <ShimmerDiv mode="light" width={175} height={130} rounded={0.5} />
        <ShimmerDiv
          mode="light"
          width={175}
          height={130}
          rounded={0.5}
          className="hidden sm:block"
        />
        <ShimmerDiv
          mode="light"
          width={175}
          height={130}
          rounded={0.5}
          className="hidden md:block"
        />
        <ShimmerDiv
          mode="light"
          width={175}
          height={130}
          rounded={0.5}
          className="hidden lg:block"
        />
        <ShimmerDiv
          mode="light"
          width={175}
          height={130}
          rounded={0.5}
          className="hidden xl:block"
        />
        <ShimmerDiv
          mode="light"
          width={175}
          height={130}
          rounded={0.5}
          className="hidden xl:block"
        />
      </section>
    </>
  );
};

export default ShimmerSimilar;
