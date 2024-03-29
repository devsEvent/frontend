"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { EventSampleImage } from "../../public";

function HeaderSlider() {
  return (
    <Swiper
      loop
      navigation
      speed={750}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      spaceBetween={20}
    >
      <SwiperSlide className="!w-full">
        <Image src={EventSampleImage} alt="" className="w-full h-full object-cover" />
      </SwiperSlide>
    </Swiper>
  );
}

export default HeaderSlider;
