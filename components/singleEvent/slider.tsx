"use client";

import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import EventPreview from "../eventPreview";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import Image from "next/image";
import { ArrowLeft, ArrowOutlineIcon } from "../../public/icons";

SwiperCore.use([Autoplay]);

function SingleEventSlider() {
  const [swipe, setSwipe] = useState<any>();
  const [swipeIndex, setSwipeIndex] = useState<number>(0);

  return (
    <div className="mt-8 w-full">
      <div className="px-5" id="singleEvent">
        <Swiper
          freeMode
          speed={750}
          spaceBetween={10}
          className="w-full"
          allowTouchMove={false}
          breakpoints={{
            1280: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 1,
            },
          }}
          onBeforeInit={(swipper) => setSwipe(swipper)}
        >
          <SwiperSlide className="w-full flex items-center justify-center">
            <EventPreview />
          </SwiperSlide>
          <SwiperSlide className="w-full flex items-center justify-center">
            <EventPreview />
          </SwiperSlide>
          <SwiperSlide className="w-full flex items-center justify-center">
            <EventPreview />
          </SwiperSlide>
          <SwiperSlide className="w-full flex items-center justify-center">
            <EventPreview />
          </SwiperSlide>
          <SwiperSlide className="w-full flex items-center justify-center">
            <EventPreview />
          </SwiperSlide>
          <SwiperSlide className="w-full flex items-center justify-center">
            <EventPreview />
          </SwiperSlide>
          <SwiperSlide className="w-full flex items-center justify-center">
            <EventPreview />
          </SwiperSlide>
          <SwiperSlide className="w-full flex items-center justify-center">
            <EventPreview />
          </SwiperSlide>
        </Swiper>

        <div className="mt-5 h-10 flex items-center justify-center lg:justify-end gap-x-3">
          <button
            onClick={() => {
              swipe?.slidePrev();
              setSwipeIndex(swipe?.realIndex);
            }}
            className={`bg-primary w-9 h-9 text-white rounded-full flex items-center justify-center ${
              0 === swipeIndex && "opacity-50"
            }`}
          >
            <Image src={ArrowLeft} alt="" className="rotate-180 w-2" />
          </button>

          <button
            onClick={() => {
              swipe?.slideNext();
              setSwipeIndex(swipe?.realIndex);
            }}
            className={`bg-primary w-9 h-9 text-white rounded-full flex items-center justify-center ${
              swipe?.slides?.length - 1 === swipeIndex && "opacity-50"
            }`}
          >
            <Image src={ArrowLeft} alt="" className="w-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleEventSlider;
