"use client";

import React from "react";

import Slide from "./slide";
import Slider from "./slider";

import { SwiperSlide } from "swiper/react";

import { homeHeader } from "../../../types";

export default function Header() {
  const slides: homeHeader[] = [
    {
      title: "دورهمی برنامه نویس ها در قزوین",
      description: "یک دورهمی دوستانه در شهر مینودری قزوین",
      time: " ۱۴ بهمن ۱۴۰۱ ساعت ۲۱:۰۰ به همراه پخش آنلاین در دو ه پخش آنلاین در دو ایونت",
      caption: " با حضور افتخاری آقای مهدی نظری",
      slug: "/قزوین",
      link: "https://google.com",
    },
    {
      title: "دورهمی برنامه نویس ها در قزوین",
      description: "یک دورهمی دوستانه در شهر مینودری قزوین",
      time: " ۱۴ بهمن ۱۴۰۱ ساعت ۲۱:۰۰ به همراه پخش آنلاین در دو ه پخش آنلاین در دو ایونت",
      caption: " با حضور افتخاری آقای مهدی نظری",
      slug: "/قزوین",
      link: "https://google.com",
    },
  ];

  return (
    <div className="px-4 lg:px-9">
      <div className="w-full rounded-3xl">
        <div>
          <Slider>
            {slides.map((item, index) => (
              <SwiperSlide
                className="relative bg-primary rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden translate-full"
                key={index}
              >
                <Slide {...item} />
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
