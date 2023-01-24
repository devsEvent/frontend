import React from "react";
import Link from "next/link";
import Image from "next/image";

import Language from "./language";

import { CalendarIcon } from "../../public/icons";

function Banner() {
  return (
    <div className="flex items-center justify-center h-11 bg-secondary text-[.7rem] lg:text-[.9rem] text-dark">
      <div className="px-9 flex items-center justify-between w-full">
        <div className="hidden lg:flex items-center gap-x-2">
          <Image src={CalendarIcon} alt="" className="w-6" />

          <time className="hidden lg:block text-[.75rem]">امروز ۷ آذر ماه ۱۴۰۱ به وقت ایران</time>
        </div>

        <h1 className="flex items-center text-[.4rem] sm:text-[.6rem] lg:text-[.75rem]">
          <span className="text-tomato">۱۲۸ روز</span>&nbsp;مانده تا دورهمی دولوپر ها در قزوین
          <Link href="">&nbsp;(اطلاعات بیشتر)</Link>
        </h1>

        <form className="flex items-center gap-x-1 ">
          <Language language="AR" defaultLanguage={false} />
          <Language language="EN" defaultLanguage={false} />
          <Language language="FA" defaultLanguage />
        </form>
      </div>
    </div>
  );
}

export default Banner;
