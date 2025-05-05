import React from "react";
import Image from "next/image";

const loading = () => {
  return (
    <div className="w-full flex h-[100vh] items-center justify-center">
      <Image
        src="/gif.gif"
        alt="loading"
        width={100}
        height={100}
        className="w-20 h-20"
      />
    </div>
  );
};

export default loading;
