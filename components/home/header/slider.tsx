import React, { ReactNode } from "react";

import { Swiper } from "swiper/react";
import SwiperCore, { Navigation, EffectCoverflow, Autoplay } from "swiper";

SwiperCore.use([Navigation, EffectCoverflow, Autoplay]);

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";

function Slider({ children }: { children: ReactNode }) {
  return (
    <Swiper
      loop
      navigation
      speed={500}
      centeredSlides
      effect="coverflow"
      slidesPerView={1.125}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      coverflowEffect={{
        rotate: 0,
        depth: 8,
        stretch: 1,
        modifier: 130,
        slideShadows: false,
      }}
      className="relative !h-[15rem] md:!h-[20rem] lg:!h-[30rem] swiper"
    >
      {children}
    </Swiper>
  );
}

export default Slider;
