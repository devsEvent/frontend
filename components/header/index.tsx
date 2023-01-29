"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectCoverflow, Autoplay } from "swiper";

import { Banner1 } from "../../public";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, EffectCoverflow, Autoplay]);

export default function Header() {
  return (
    <div className="px-4 lg:px-9">
      <div className=" w-full rounded-3xl">
        <div>
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
            className="!h-[17.5rem] md:!h-[20rem] lg:!h-[30rem] swiper"
          >
            <SwiperSlide className="bg-primary rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden trans">
              <Image src={Banner1} alt="" className="object-cover h-full w-full" />
            </SwiperSlide>
            <SwiperSlide className="bg-primary rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden trans">
              <Image src={Banner1} alt="" className="object-cover h-full w-full" />
            </SwiperSlide>
            <SwiperSlide className="bg-primary rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden trans">
              <Image src={Banner1} alt="" className="object-cover h-full w-full" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
