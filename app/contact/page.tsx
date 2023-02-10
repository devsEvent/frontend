import Image from "next/image";
import React from "react";

import Header from "../../components/elements/header";
import HeaderBox from "../../components/elements/headerBox";

import { MobileIcon, SupportIcon } from "../../public/icons";

function Contact() {
  return (
    <main className="flex flex-col items-center mt-28">
      <HeaderBox>تماس با ما</HeaderBox>

      <Header>فرم زیر را پر کنید در اولین فرصت با شما تماس میگیریم</Header>

      <section className="grid grid-cols-1 gap-4 px-2 mt-8 lg:grid-cols-2">
        <div className="flex items-center p-3 border shadow-md gap-x-4 rounded-2xl">
          <div className="p-2 bg-primary-3 rounded-2xl">
            <Image src={MobileIcon} alt="" className="w-10" />
          </div>

          <div className="flex items-center justify-between w-[15rem]">
            <h1>تماس با ما</h1>
            <p>۰۰۱۶۵۴۷۶۵۸۹</p>
          </div>
        </div>

        <div className="flex items-center p-3 border shadow-md gap-x-4 rounded-2xl">
          <div className="p-2 bg-primary-3 rounded-2xl">
            <Image src={MobileIcon} alt="" className="w-10" />
          </div>

          <div className="flex items-center justify-between w-[15rem]">
            <h1>ایمیل</h1>
            <p>Example@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center p-3 border shadow-md gap-x-4 rounded-2xl">
          <div className="p-2 bg-primary-3 rounded-2xl">
            <Image src={MobileIcon} alt="" className="w-10" />
          </div>

          <div className="flex items-center justify-between w-[15rem]">
            <h1>آدرس</h1>
            <p>قزوین - تهران</p>
          </div>
        </div>

        <div className="flex items-center p-3 border shadow-md gap-x-4 rounded-2xl">
          <div className="p-2 bg-primary-3 rounded-2xl">
            <Image src={SupportIcon} alt="" className="w-10" />
          </div>

          <div className="flex items-center justify-between w-[15rem]">
            <h1>پشتیبانی</h1>
            <p>۰۰۱۶۵۴۷۶۵۸۹</p>
          </div>
        </div>
      </section>

      <h3 className="px-2 mt-8 leading-8 text-center text-dark">
        پیغام خود را بنویسید در اولین فرصت با شما تماس گرفته میشود
      </h3>
      <section className="mt-4 px-3 w-full md:w-[30rem] lg:w-[35rem] flex flex-col items-center">
        <h4 className="font-semibold">فرم زیر را پر کنید</h4>

        <form className="flex flex-col w-full mt-4 gap-y-4">
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            className="w-full px-3 py-4 border outline-none text-dark placeholder:text-dim-dark rounded-2xl"
          />

          <input
            type="number"
            placeholder="شماره موبایل"
            className="w-full px-3 py-4 border outline-none text-dark placeholder:text-dim-dark rounded-2xl"
          />

          <input
            type="text"
            placeholder="عنوان"
            className="w-full px-3 py-4 border outline-none text-dark placeholder:text-dim-dark rounded-2xl"
          />

          <textarea
            className="px-3 py-4 w-full min-h-[8rem] text-dark placeholder:text-dim-dark rounded-2xl border outline-none"
            placeholder="پیام خود را بنویسید...."
          />

          <button className="w-full px-3 py-4 mt-4 text-white outline-none bg-primary rounded-2xl">ارسال</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
