import React from "react";
import Link from "next/link";
import Image from "next/image";

import { AboutProfileSample4 } from "../../public";
import { DribbleIcon, InstagramOutlineIcon, TelegramIcon, WhatsappIcon } from "../../public/icons/social";

function Person() {
  return (
    <div className="mx-auto">
      <Image src={AboutProfileSample4} alt="" className="rounded-[3rem] rounded-br-[10rem] " />
      <h1 className="mt-4 text-lg font-semibold text-primary three-dots">دایانا</h1>
      <h2 className="mt-2 text-base text-dark three-dots">طراحی رابط کاربری و تجربه کاربری</h2>

      <div className="flex items-center w-full mt-3 gap-x-3 group:w-10">
        <Link href="">
          <Image src={TelegramIcon} alt="" />
        </Link>
        <Link href="">
          <Image src={WhatsappIcon} alt="" />
        </Link>
        <Link href="">
          <Image src={DribbleIcon} alt="" />
        </Link>
        <Link href="">
          <Image src={InstagramOutlineIcon} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Person;
