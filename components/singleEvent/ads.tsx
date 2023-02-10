import React from "react";
import Image from "next/image";

import { Banner2 } from "../../public";

function ADS() {
  return (
    <section className="flex flex-col items-center w-full gap-4 md:flex-row bg-primary-3">
      <Image src={Banner2} alt="" className="w-full md:w-[50%] !h-[100%]" />

      <div className="p-4 md:p-4 w-full md:w-[45%]">
        <h2 className="mb-2 text-white lg:text-xl three-dots">اینجا جای تبلیغ شماست</h2>
        <h1 className="w-full my-3 text-xl font-semibold text-white lg:my-5 lg:text-3xl three-dots">
          اینجا جای تبلیغ شماست
        </h1>
        <p className="max-w-[20rem] lg:max-w-[35rem] text-white text-sm lg:text-xl mt-3 leading-8 lg:leading-10">
          چرا به این ایونت بپیوندید چرا به این ایونت بپیوندید چرا به این ایونت بپیوندید چرا به این ایونت بپیوندید
        </p>
      </div>
    </section>
  );
}

export default ADS;
