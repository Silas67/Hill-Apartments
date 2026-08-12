import React from "react";
import Image from "next/image";

const loading = () => {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="w-full flex h-[100vh] items-center justify-center"
    >
      <Image
        src="/gif.gif"
        alt=""
        width={100}
        height={100}
        // The optimizer flattens animated GIFs to a single frame.
        unoptimized
        className="w-20 h-20"
      />
    </div>
  );
};

export default loading;
