import React from "react";
import Image from "next/image";

import { Banner2 } from "../../public";

function ADS() {
  return (
    <section className="flex items-center flex-col md:flex-row gap-4 bg-primary-3 w-full">
      <Image src={Banner2} alt="" className="w-full md:w-[50%] !h-[100%]" />

      <div className="p-4 md:p-4 w-full md:w-[45%]">
        <h2 className="text-white mb-2 lg:text-xl three-dots">اینجا جای تبلیغ شماست</h2>
        <h1 className="my-3 lg:my-5 text-white text-xl lg:text-3xl font-semibold w-full three-dots">
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
