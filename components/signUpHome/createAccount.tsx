import React from "react";
import Image from "next/image";

import { playIcon } from "../../public/icons";
import { CreateAccountHomeImage } from "../../public";

import { styles } from "../../styles";

function CreateAccount() {
  return (
    <div className="2xl:px-20 flex items-center justify-between flex-col-reverse lg:flex-row gap-y-8">
      <div className="flex flex-col items-center gap-y-8">
        <h2 className="text-[1.25rem] lg:text-[1.75rem] font-semibold text-center">مزایای عضویت در دو ایونت</h2>

        <p className="text-[.8rem] lg:text-[1rem] font-medium">برگزاری دورهمی کاملا آنلاین و امن</p>

        <p className="text-[.6rem] lg:text-[.8rem]">بالای ۷۰۰ نفر یوزر فعال و آنلاین </p>
        <p className="text-[.6rem] lg:text-[.8rem]">بالای ۲۰ هزار تا بازدید کننده و مهمان</p>

        <div className="flex items-center gap-x-2 lg:gap-x-5">
          <button
            className={`${styles.secondary} !px-6 !py-3 lg:!px-12 lg:!py-4 text-[.8rem] lg:text-[1rem] text-white`}
          >
            ثبت نام
          </button>

          <button className="px-3 py-2 lg:!px-4 lg:!py-3 text-[.8rem] lg:text-[1rem] flex items-center gap-x-2 lg:gap-x-4 border-primary-2 border-2 rounded-full">
            <span className="text-primary-2 font-semibold">تماشا ویدیو</span>

            <Image src={playIcon} alt="play icon" className="w-6 lg:w-8" />
          </button>
        </div>
      </div>

      <Image src={CreateAccountHomeImage} alt="create account" className="" />
    </div>
  );
}

export default CreateAccount;
