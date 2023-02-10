import React from "react";
import Link from "next/link";
import Image from "next/image";

import Detail from "./detail";
import Controlers from "../controlers";
import HeaderSlider from "../headerSlider";

import { EventSampleImage } from "../../../public";
import {
  CalendarWhiteIcon,
  DollarsIcon,
  FoodIcon,
  LocationWhiteIcon,
  PeopleIcon,
  TimeIcon,
  TimerIcon,
} from "../../../public/icons";

type Props = {
  title: string;
  starDay: string;
  starTime: string;
  description: string;
  price: number | undefined;
  address: string | undefined;
  location: string | undefined;
  catering: string | undefined;
  capacity: number | undefined;
};

function Details({ title, address, location, starDay, catering, starTime, capacity, price, description }: Props) {
  const details = [
    {
      title: `${price && price !== 0 ? `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان` : "رایگان"}`,
      imageIcon: DollarsIcon,
    },
    {
      title: starDay,
      imageIcon: CalendarWhiteIcon,
    },
    {
      title: starTime,
      imageIcon: TimerIcon,
    },
    {
      title: `${catering ? catering : "-"}`,
      imageIcon: FoodIcon,
    },
    {
      title: `ظرفیت ${capacity} نفر`,
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
          <h1 className="pl-10 w-full text-dim-dark text-[.8rem] md:text-lg three-dots">{title}</h1>

          <ul className="mt-3 h-full flex flex-col justify-between bg-opacity-50">
            <li className="mt-4 lg:mt-6 flex items-center gap-x-3 lg:gap-x-4">
              <div className="p-1 lg:p-[.35rem] bg-primary rounded-lg rounded-bl-none">
                <Image src={LocationWhiteIcon} alt="" />
              </div>

              <Link
                href={location ? location : ""}
                target="_blank"
                className={`lg:pl-10 w-full text-[.8rem] lg:text-base text-dark three-dots ${
                  location && "underline underline-offset-2"
                }`}
              >
                {address}
              </Link>
            </li>

            {details.map((item, index) => (
              <Detail item={item} key={index} />
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-8">
        <h4 className="text-dark font-semibold text-xl">توضیحات</h4>
        <p className="mt-3 pl-3 max-h-[20rem] lg:max-h-[14rem] text-dim-dark text-sm leading-8 overflow-auto customize-scrollbar customize-scrollbar-thin">
          {description}
        </p>
      </div>

      <Controlers />
    </section>
  );
}

export default Details;
