"use client";

import React from "react";
import Image from "next/image";

import { SampleAvatar } from "../../public";
import { Swiper, SwiperSlide } from "swiper/react";
import { StarIcon, StarOutlineIcon } from "../../public/icons";

function UserComments() {
  return (
    <div className="mt-9 p-9 h-fit bg-primary flex flex-col items-center comments-background">
      <h1 className="py-3 px-6 bg-secondary-1 bg-secondary-transparent text-white rounded-3xl w-fit">نظرات کاربران</h1>

      <Swiper
        loop
        navigation
        speed={750}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        className="my-12 w-full swiper-comments"
      >
        <SwiperSlide className="flex flex-col items-center w-full">
          <div className="w-[100%] flex flex-col items-center">
            <h2 className="text-sm md:text-base lg:text-2xl leading-8 text-center text-white">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </h2>

            <span className="mt-2 lg:mt-7 text-white text-2xl lg:text-6xl font-serif font-extrabold">“</span>

            <p className="px-2 sm:px-14 lg:24 xl:px-52 text-[.6rem] md:text-[.75rem] lg:text-[.9rem] text-white leading-8 text-center comments-three-dots">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
            </p>

            <div className="mt-8 h-20 lg:h-30 w-20 lg:w-30 rounded-full overflow-hidden">
              <Image src={SampleAvatar} alt="" className="object-cover" />
            </div>

            <h3 className="mt-6 w-[75%] lg:w-[25%] text-white text-md lg:text-md font-semibold text-center three-dots">
              دایانا رادفر
            </h3>
            <h4 className="mt-4 w-[75%] lg:w-[20%] text-white text-sm lg:text-lg text-center three-dots">Developer</h4>

            <div className="mt-4 flex items-center gap-x-1">
              {[...new Array(5 - 4)].map((item, index) => (
                <Image src={StarOutlineIcon} alt="" key={index} className="w-[.9rem] lg:w-[1.1rem]" />
              ))}
              {[...new Array(4)].map((item, index) => (
                <Image src={StarIcon} alt="" key={index} className="w-[.9rem] lg:w-[1.1rem]" />
              ))}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default UserComments;
