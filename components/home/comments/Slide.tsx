import React from "react";
import Image from "next/image";

import { comment } from "../../../types/event";

import { StarIcon, StarOutlineIcon } from "../../../public/icons";

function Slide(props: comment) {
  const { name, event, rate, text, stack, logoImage } = props;

  return (
    <div className="w-[100%] flex flex-col items-center">
      <h2 className="text-sm leading-8 text-center text-white md:text-base lg:text-2xl">{event}</h2>

      <span className="mt-2 font-serif text-2xl font-extrabold text-white lg:mt-7 lg:text-6xl">“</span>

      <p className="px-2 sm:px-14 lg:24 xl:px-52 text-[.6rem] md:text-[.75rem] lg:text-[.9rem] text-white leading-8 text-center comments-three-dots">
        {text}
      </p>

      <div className="w-20 h-20 mt-8 overflow-hidden rounded-full lg:h-30 lg:w-30">
        <Image src={logoImage} alt="" className="object-cover" />
      </div>

      <h3 className="mt-6 w-[75%] lg:w-[25%] text-white text-md lg:text-md font-semibold text-center three-dots">
        {name}
      </h3>
      <h4 className="mt-4 w-[75%] lg:w-[20%] text-white text-sm lg:text-lg text-center three-dots">{stack}</h4>

      <div className="flex items-center mt-4 gap-x-1">
        {[...new Array(5 - rate)].map((item, index) => (
          <Image src={StarOutlineIcon} alt="" key={index} className="w-[.9rem] lg:w-[1.1rem]" />
        ))}
        {[...new Array(rate)].map((item, index) => (
          <Image src={StarIcon} alt="" key={index} className="w-[.9rem] lg:w-[1.1rem]" />
        ))}
      </div>
    </div>
  );
}

export default Slide;
