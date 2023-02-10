"use client";

import React from "react";

import Slide from "./Slide";
import Slider from "./slider";

import { SwiperSlide } from "swiper/react";
import { SampleAvatar } from "../../../public";

function HomeCommments() {
  const comments = [
    {
      name: "دایانا رادفر",
      event: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      stack: "Developer",
      text: `      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
      بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
      هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده`,
      rate: 4,
      logoImage: SampleAvatar,
    },
    {
      name: "محمد محققیان",
      event: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      stack: "Front-end Dev",
      text: `      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
      بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
      هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده`,
      rate: 2,
      logoImage: SampleAvatar,
    },
  ];

  return (
    <div className="flex flex-col items-center mt-9 p-9 h-fit bg-primary comments-background">
      <h1 className="px-6 py-3 text-white bg-secondary-1 bg-secondary-transparent rounded-3xl w-fit">نظرات کاربران</h1>

      <Slider>
        {comments.map((item, index) => (
          <SwiperSlide className="flex flex-col items-center w-full" key={index}>
            <Slide {...item} />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
}

export default HomeCommments;
