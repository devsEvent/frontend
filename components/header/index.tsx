"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectCoverflow, Autoplay } from "swiper";

import { Banner1 } from "../../public";

import { CalendarWhiteIcon } from "../../public/icons";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import Link from "next/link";

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
            className="relative !h-[15rem] md:!h-[20rem] lg:!h-[30rem] swiper"
          >
            <SwiperSlide className="relative bg-primary rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden translate-full">
              <Image src={Banner1} alt="" className="object-cover h-full w-full" />

              <div className="px-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex flex-col items-center text-center text-white">
                <h1 className="font-semibold text-[.75rem] lg:text-[2.25rem] header-three-dots">
                  دورهمی برنامه نویس ها در قزوین
                </h1>
                <h2 className="lg:px-10 my-[.75rem] lg:my-[1.75rem] text-[.5rem] lg:text-[1.25rem] w-[95%] lg:w-[75%] three-dots">
                  یک دورهمی دوستانه در شهر مینودری قزوین
                </h2>

                <div className="lg:px-10 flex items-center justify-center gap-x-2 lg:gap-x-3">
                  <Image src={CalendarWhiteIcon} alt="calendr icon" className="w-[1rem] lg:w-[1.5rem]" />
                  <p className="text-[.5rem] lg:text-base w-[60%] lg:w-[100%] three-dots">
                    ۱۴ بهمن ۱۴۰۱ ساعت ۲۱:۰۰ به همراه پخش آنلاین در دو ه پخش آنلاین در دو ایونت
                  </p>
                </div>
                <h3 className="lg:px-10 my-[.75rem] lg:my-[1.75rem] text-[.5rem] lg:text-[1.25rem] w-[95%] lg:w-[65%] three-dots">
                  با حضور افتخاری آقای مهدی نظری
                </h3>
                <div className="flex gap-x-3">
                  <Link
                    href={""}
                    className="px-4 lg:px-6 py-2 lg:py-4 text-[.5rem] lg:text-[1rem] bg-white text-dark rounded-full"
                  >
                    شروع کنید
                  </Link>
                  <Link
                    href={""}
                    className="px-4 lg:px-6 py-2 lg:py-4 text-[.5rem] lg:text-[1rem] border-white border text-white rounded-full"
                  >
                    اطلاعات بیشتر
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative bg-primary rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden translate-full">
              <Image src={Banner1} alt="" className="object-cover h-full w-full" />

              <div className="px-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex flex-col items-center text-center text-white">
                <h1 className="font-semibold text-[.75rem] lg:text-[2.25rem] header-three-dots">
                  دورهمی برنامه نویس ها در قزوین
                </h1>
                <h2 className="lg:px-10 my-[.75rem] lg:my-[1.75rem] text-[.5rem] lg:text-[1.25rem] w-[95%] lg:w-[75%] three-dots">
                  یک دورهمی دوستانه در شهر مینودری قزوین
                </h2>

                <div className="lg:px-10 flex items-center justify-center gap-x-2 lg:gap-x-3">
                  <Image src={CalendarWhiteIcon} alt="calendr icon" className="w-[1rem] lg:w-[1.5rem]" />
                  <p className="text-[.5rem] lg:text-base w-[60%] lg:w-[100%] three-dots">
                    ۱۴ بهمن ۱۴۰۱ ساعت ۲۱:۰۰ به همراه پخش آنلاین در دو ه پخش آنلاین در دو ایونت
                  </p>
                </div>
                <h3 className="lg:px-10 my-[.75rem] lg:my-[1.75rem] text-[.5rem] lg:text-[1.25rem] w-[95%] lg:w-[65%] three-dots">
                  با حضور افتخاری آقای مهدی نظری
                </h3>
                <div className="flex gap-x-3">
                  <Link
                    href={""}
                    className="px-4 lg:px-6 py-2 lg:py-4 text-[.5rem] lg:text-[1rem] bg-white text-dark rounded-full"
                  >
                    شروع کنید
                  </Link>
                  <Link
                    href={""}
                    className="px-4 lg:px-6 py-2 lg:py-4 text-[.5rem] lg:text-[1rem] border-white border text-white rounded-full"
                  >
                    اطلاعات بیشتر
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
