import React from "react";
import Link from "next/link";
import Image from "next/image";

import { homeHeader } from "../../../types";

import { Banner1 } from "../../../public";
import { CalendarWhiteIcon } from "../../../public/icons";

function Slide(props: homeHeader) {
  const { title, description, time, caption, slug, link } = props;

  return (
    <>
      <Image src={Banner1} alt="" className="object-cover w-full h-full" loading="lazy" />

      <div className="px-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex flex-col items-center text-center text-white">
        <h1 className="font-semibold text-[.75rem] lg:text-[2.25rem] header-three-dots">{title}</h1>
        <h2 className="lg:px-10 my-[.75rem] lg:my-[1.75rem] text-[.5rem] lg:text-[1.25rem] w-[95%] lg:w-[75%] three-dots">
          {description}
        </h2>

        <div className="flex items-center justify-center lg:px-10 gap-x-2 lg:gap-x-3">
          <Image src={CalendarWhiteIcon} alt="calendr icon" className="w-[1rem] lg:w-[1.5rem]" />
          <p className="text-[.5rem] lg:text-base w-[60%] lg:w-[100%] three-dots">{time}</p>
        </div>
        <h3 className="lg:px-10 my-[.75rem] lg:my-[1.75rem] text-[.5rem] lg:text-[1.25rem] w-[95%] lg:w-[65%] three-dots">
          {caption}
        </h3>
        <div className="flex gap-x-3">
          <Link
            target="_blank"
            href={link}
            className="px-4 lg:px-6 py-2 lg:py-4 text-[.5rem] lg:text-[1rem] bg-white text-dark rounded-full"
          >
            شروع کنید
          </Link>
          <Link
            href={`event/${slug}`}
            className="px-4 lg:px-6 py-2 lg:py-4 text-[.5rem] lg:text-[1rem] border-white border text-white rounded-full"
          >
            اطلاعات بیشتر
          </Link>
        </div>
      </div>
    </>
  );
}

export default Slide;
