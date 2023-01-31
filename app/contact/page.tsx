import Image from "next/image";
import React from "react";
import Header from "../../components/elements/header";
import HeaderBox from "../../components/elements/headerBox";
import { EmailIcon, MobileIcon, SupportIcon, ThinLocationIcon } from "../../public/icons";

function Contact() {
  return (
    <main className="mt-28 flex items-center flex-col">
      <HeaderBox>تماس با ما</HeaderBox>

      <Header>فرم زیر را پر کنید در اولین فرصت با شما تماس میگیریم</Header>

      <section className="mt-8 px-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-3 flex items-center gap-x-4 rounded-2xl border shadow-md">
          <div className="p-2 bg-primary-3 rounded-2xl">
            <Image src={MobileIcon} alt="" className="w-10" />
          </div>
          <div className="flex items-center justify-between w-[15rem]">
            <h1>تماس با ما</h1>
            <p>۰۰۱۶۵۴۷۶۵۸۹</p>
          </div>
        </div>
        <div className="p-3 flex items-center gap-x-4 rounded-2xl border shadow-md">
          <div className="p-2 bg-primary-3 rounded-2xl">
            <Image src={MobileIcon} alt="" className="w-10" />
          </div>
          <div className="flex items-center justify-between w-[15rem]">
            <h1>ایمیل</h1>
            <p>Example@gmail.com</p>
          </div>
        </div>
        <div className="p-3 flex items-center gap-x-4 rounded-2xl border shadow-md">
          <div className="p-2 bg-primary-3 rounded-2xl">
            <Image src={MobileIcon} alt="" className="w-10" />
          </div>
          <div className="flex items-center justify-between w-[15rem]">
            <h1>آدرس</h1>
            <p>قزوین - تهران</p>
          </div>
        </div>
        <div className="p-3 flex items-center gap-x-4 rounded-2xl border shadow-md">
          <div className="p-2 bg-primary-3 rounded-2xl">
            <Image src={SupportIcon} alt="" className="w-10" />
          </div>
          <div className="flex items-center justify-between w-[15rem]">
            <h1>پشتیبانی</h1>
            <p>۰۰۱۶۵۴۷۶۵۸۹</p>
          </div>
        </div>
      </section>

      <h3 className="mt-8 px-2 text-center text-dark leading-8">
        پیغام خود را بنویسید در اولین فرصت با شما تماس گرفته میشود
      </h3>
      <section className="mt-4 px-3 w-full md:w-[30rem] lg:w-[35rem] flex flex-col items-center">
        <h4 className="font-semibold">فرم زیر را پر کنید</h4>

        <form className="mt-4 w-full flex flex-col gap-y-4">
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            className="px-3 py-4 w-full text-dark placeholder:text-dim-dark rounded-2xl border outline-none"
          />
          <input
            type="number"
            placeholder="شماره موبایل"
            className="px-3 py-4 w-full text-dark placeholder:text-dim-dark rounded-2xl border outline-none"
          />
          <input
            type="text"
            placeholder="عنوان"
            className="px-3 py-4 w-full text-dark placeholder:text-dim-dark rounded-2xl border outline-none"
          />
          <textarea
            className="px-3 py-4 w-full min-h-[8rem] text-dark placeholder:text-dim-dark rounded-2xl border outline-none"
            placeholder="پیام خود را بنویسید...."
          ></textarea>
          <button type="submit" className="mt-4 px-3 py-4 w-full bg-primary text-white rounded-2xl outline-none">
            ارسال
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
