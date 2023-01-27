import Image from "next/image";
import React from "react";
import { EmailSettlerImage } from "../../public";

function EmailSettler() {
  return (
    <section className="mt-16 mx-5 lg:mx-9 p-9 lg:px-20 lg:py-0 h-fit lg:h-[27.5rem] flex items-center justify-between flex-col lg:flex-row gap-y-8 rounded-3xl email-settler-background bg-primary-3 ">
      <Image src={EmailSettlerImage} alt="" className="w-full md:w-[40%] " />

      <form className="w-full lg:w-[45%] flex flex-col items-center lg:block">
        <h1 className="text-white text-[1.25rem] md:text-[1.75rem]">خبرنامه رایگان</h1>

        <p className="mt-4 text-white text-[.65rem] md:text-[1rem] text-center lg:text-start lg:pl-18 xl:pl-28 leading-7">
          برای عضویت در خبرنامه و اطلاع رسانی ایونت و دورهمی های جدید ایمیل خود را وارد کنید
          <br /> اولین نفر باشید که از دورهمی ها اطلاع پیدا میکنید
        </p>

        <div className="mt-7 flex items-center flex-col lg:flex-row gap-4 w-full">
          <input
            type="text"
            placeholder="ایمیل خود را وارد کنید ..."
            className="p-4 w-full lg:w-[55%] text-[.8rem] md:text-[.9rem] bg-secondary-transparent text-secondary placeholder:text-secondary rounded-full outline-none"
          />

          <button className="py-4 px-6 w-full lg:w-fit text-primary font-semibold bg-secondary rounded-full">
            ارسال
          </button>
        </div>
      </form>
    </section>
  );
}

export default EmailSettler;
