import React, { ReactNode } from "react";

import { Swiper } from "swiper/react";

function Slider({ children }: { children: ReactNode }) {
  return (
    <Swiper
      loop
      navigation
      speed={750}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      className="w-full my-12 swiper-comments"
    >
      {children}
    </Swiper>
  );
}

export default Slider;
