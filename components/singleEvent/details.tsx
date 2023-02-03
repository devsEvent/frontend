import React from "react";
import Image from "next/image";

import Detail from "./detail";
import Controlers from "./controlers";
import HeaderSlider from "./headerSlider";

import { EventSampleImage } from "../../public";
import {
  CalendarWhiteIcon,
  DollarsIcon,
  FoodIcon,
  LocationWhiteIcon,
  PeopleIcon,
  TimeIcon,
  TimerIcon,
} from "../../public/icons";

function Details() {
  const details = [
    { title: "تهران ; میدان آزادی", imageIcon: LocationWhiteIcon },
    {
      title: "رایگان",
      imageIcon: DollarsIcon,
    },
    {
      title: "یک‌شنبه ۱۳ آذر ۱۴۰۱",
      imageIcon: CalendarWhiteIcon,
    },
    {
      title: "ساعت ۰۸:۰۰ - ۱۳:۰۰",
      imageIcon: TimerIcon,
    },
    {
      title: "به همراه پذیرایی ناهار و شام",
      imageIcon: FoodIcon,
    },
    {
      title: "ظرفیت ۲۰۵ نفر",
      imageIcon: PeopleIcon,
    },
  ];

  return (
    <section className="relative p-4 w-full xl:w-[75%] h-full border rounded-2xl">
      <div className="flex flex-col md:flex-row w-full gap-5">
        <div className="relative w-full h-full md:w-[45%] rounded-2xl overflow-hidden">
          <HeaderSlider />

          <div className="mt-2 h-[5rem] lg:h-[6rem] hidden md:flex items-center justify-between">
            <div className="relative w-[23.5%] h-full rounded-xl overflow-hidden">
              <Image src={EventSampleImage} alt="" className="w-full h-full object-cover" />

              <span className="absolute top-0 h-full w-full flex items-center justify-center text-2xl font-semibold text-dark bg-white bg-opacity-50">
                +۱۰
              </span>
            </div>
            <Image src={EventSampleImage} alt="" className="w-[23.5%] h-full rounded-xl" />
            <Image src={EventSampleImage} alt="" className="w-[23.5%] h-full rounded-xl" />
            <Image src={EventSampleImage} alt="" className="w-[23.5%] h-full rounded-xl" />
          </div>

          <time className="py-2 lg:py-3 px-3 lg:px-4 absolute top-3 right-3 bg-primary-3 flex items-center gap-x-2 lg:gap-x-3 rounded-full z-[4]">
            <Image src={TimeIcon} alt="clock icon" className="lg:mt-[-.125rem] w-4 lg:w-5" />

            <span className=" text-white text-[.6rem] lg:text-[.8rem]">۰۸ : ۰۰ : ۰۸</span>
          </time>
        </div>

        <div className="w-full md:w-[50%] flex flex-col">
          <h1 className="pl-10 w-full text-dim-dark text-[.8rem] md:text-lg three-dots">
            رویداد فرانت چپتر میزبانی برج میلاد تهران
          </h1>

          <ul className="mt-3 h-full flex flex-col justify-between bg-opacity-50">
            {details.map((item, index) => (
              <Detail item={item} key={index} />
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-8">
        <h4 className="text-dark font-semibold text-xl">توضیحات</h4>
        <p className="mt-3 pl-3 max-h-[20rem] lg:max-h-[14rem] text-dim-dark text-sm leading-8 overflow-auto customize-scrollbar customize-scrollbar-thin">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          بلکه روزنامه و مجله لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
        </p>
      </div>

      <Controlers />
    </section>
  );
}

export default Details;
