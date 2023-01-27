"use client";

import React from "react";
import Image from "next/image";

import FooterLink from "./footerLink";

import { ArrowUpIcon, EenamadIcon, PrimaryAppIcon, ZarinpaalIcon } from "../../public/icons";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "../../public/icons/social";

function Footer() {
  const ScrollTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary">
      <div className="mt-20 px-9 py-12 relative mx-auto max-w-full xl:max-w-[95rem] bg-secondary flex justify-between flex-wrap gap-y-8 footer-background">
        <div className="w-full lg:w-fit">
          <Image src={PrimaryAppIcon} alt="website icon" className="w-18" />
          <h2 className="my-4 font-semibold text-[.9rem] lg:text-[1.125rem]">دو اینت برای همه</h2>

          <p className="text-[.75rem] lg:text-[.9rem] text-dim-dark leading-7">
            در دو ایونت میتوانید شبکه سازی کنید و با همکاران
            <br />
            دورهمی های کاملا امن داشته باشید ...
            <br />
            دو ایونت یک انتخاب برای آینده بهتر و ارتقای شغلی
            <br />
            شما میباشد ...
            <br />
            تمام تلاش خود را برای بهبود عملکرد دو ایونت میکنیم
          </p>
        </div>

        <div className="w-full lg:w-fit flex gap-x-20">
          <div>
            <h3 className="font-semibold text-[.9rem] lg:text-[1.125rem]">دسترسی سریع</h3>

            <ul>
              <li>
                <FooterLink href="">خانه</FooterLink>
              </li>
              <li>
                <FooterLink href="">رویدادها</FooterLink>
              </li>
              <li>
                <FooterLink href="">جدول زمان بندی</FooterLink>
              </li>
              <li>
                <FooterLink href="">درباره ما</FooterLink>
              </li>
              <li>
                <FooterLink href="">تماس با ما</FooterLink>
              </li>
              <li>
                <FooterLink href="">سوالات متداول</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[.9rem] lg:text-[1.125rem]">خدمات مشتریان</h3>
            <ul>
              <li>
                <FooterLink href="">پشتیبانی</FooterLink>
              </li>
              <li>
                <FooterLink href="">قوانین و مقررات</FooterLink>
              </li>
              <li>
                <FooterLink href="">انتقادات و پیشنهادات</FooterLink>
              </li>
              <li>
                <FooterLink href="">همکاری با ما</FooterLink>
              </li>
              <li>
                <FooterLink href="">شرایط استفاده</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-[25%]">
          <h3 className="font-semibold text-[.9rem] lg:text-[1.125rem]">پشتیبانی</h3>

          <p className="text-dim-dark mt-4 text-[.75rem] lg:text-[.9rem]">ایمیل : Sample@gmail.com</p>
          <p className="text-dim-dark mt-4 text-[.75rem] lg:text-[.9rem]">تلفن تماس : 1234567-021</p>
          <p className="text-dim-dark mt-4 text-[.75rem] lg:text-[.9rem]">آدرس : تهران - کاشان - قزوین</p>

          <div className="mt-4 flex items-center gap-x-4">
            <Image src={ZarinpaalIcon} alt="zarin paal icon" className="w-12" />
            <Image src={EenamadIcon} alt="eenamad icon" className="w-12" />
          </div>
        </div>
        <button
          onClick={ScrollTopHandler}
          className="absolute left-3 bottom-3 lg:left-4 lg:bottom-4 bg-primary flex items-center justify-center rounded-full h-12 w-12  lg:h-14 lg:w-14"
        >
          <Image src={ArrowUpIcon} alt="" />
        </button>
      </div>

      <div className="px-6 lg:px-9 py-4 lg:py-2 bg-primary flex items-center justify-between flex-col-reverse lg:flex-row gap-y-3">
        <div className="flex items-center gap-x-4">
          <Image src={TwitterIcon} alt="twitter icon" className="h-6" />
          <Image src={FacebookIcon} alt="facebook icon" className="h-6" />
          <Image src={LinkedInIcon} alt="linkedin icon" className="h-6" />
          <Image src={InstagramIcon} alt="instgram icon" className="h-6" />
        </div>

        <h4 className="text-white text-center text-[.7rem] lg:text-[.9rem]">
          {new Date().getFullYear()} :: © تمامی حقوق مادی و معنوی برای دو ایونت میباشد ...
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
