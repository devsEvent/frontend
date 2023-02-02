import React from "react";
import Link from "next/link";
import Image from "next/image";

import Header from "../../components/elements/header";
import HeaderBox from "../../components/elements/headerBox";

import {
  AboutImageSample,
  AboutImageSample2,
  AboutImageSample3,
  AboutImageSample4,
  AboutProfileSample4,
} from "../../public";
import { DribbleIcon, InstagramOutlineIcon, TelegramIcon, WhatsappIcon } from "../../public/icons/social";

function About() {
  return (
    <main className="mt-20 p-3 lg:p-9">
      <header className="flex flex-col items-center">
        <HeaderBox>درباره ما</HeaderBox>

        <Header>تیم ما و چگونگی شکل گیری دو ایونت</Header>
      </header>

      <article className="px-2 lg:px-0 mt-10">
        <div className="flex items-center justify-between h-[10rem] md:h-[20rem] lg:h-[35rem]">
          <Image src={AboutImageSample2} alt="" className="w-[27.5%] h-full rounded-3xl" />
          <Image src={AboutImageSample} alt="" className="w-[70%] h-full rounded-3xl" />
        </div>

        <section className="mt-10">
          <h2 className="text-primary text-base">شروع در سال 1401</h2>
          <h3 className="mt-5 text-dim-dark text-md md:text-xl">ما در سال 1401 شروع کردیم</h3>
          <p className="mt-5 text-dim-dark text-[0.75rem] md:text-base leading-8 lg:leading-9">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
            و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای الخصوص طراحان خلاقی، و فرهنگ
            پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
            شرایط سخت تایپ به پایان رسد و زمان نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
            موجود طراحی لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
            شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای الخصوص
            طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در
            ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی
          </p>
        </section>

        <section className="mt-10 flex flex-col-reverse lg:flex-row justify-between gap-8">
          <div className="">
            <h2 className="text-primary text-base">شروع در سال 1401</h2>
            <h3 className="mt-5 text-dim-dark text-md md:text-xl">ما در سال 1401 شروع کردیم</h3>
            <p className="mt-5 text-dim-dark text-[0.75rem] md:text-base leading-8 lg:leading-9">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
              شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای الخصوص
              طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود
              در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
              سوالات پیوسته اهل دنیای موجود طراحی در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان نیاز شامل
              حروفچینی دستاوردهای اصلی، و جوابگوی
            </p>
          </div>
          <Image src={AboutImageSample3} alt="" className="h-full w-full lg:w-[45%] rounded-3xl" />
        </section>
        <section className="mt-10 flex flex-col lg:flex-row justify-between gap-8">
          <Image src={AboutImageSample4} alt="" className="h-full w-full lg:w-[45%] rounded-3xl" />
          <div className="">
            <h2 className="text-primary text-base">شروع در سال 1401</h2>
            <h3 className="mt-5 text-dim-dark text-md md:text-xl">ما در سال 1401 شروع کردیم</h3>
            <p className="mt-5 text-dim-dark text-[0.75rem] md:text-base leading-8 lg:leading-9">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
              شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای الخصوص
              طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود
              در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
              سوالات پیوسته اهل دنیای موجود طراحی در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان نیاز شامل
              حروفچینی دستاوردهای اصلی، و جوابگوی
            </p>
          </div>
        </section>
      </article>

      <section className="mt-10 flex flex-col items-center">
        <HeaderBox>شروع در سال 1401</HeaderBox>
        <Header>تیم دو ایونت</Header>

        <div className="px-2 lg:px-0 mt-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8">
          <div className="mx-auto">
            <Image src={AboutProfileSample4} alt="" className="rounded-[3rem] rounded-bl-[10rem]" />
            <h1 className="mt-4 text-primary text-lg font-semibold three-dots">دایانا</h1>
            <h2 className="mt-2 text-dark text-base three-dots">طراحی رابط کاربری و تجربه کاربری</h2>

            <div className="mt-3 w-full flex items-center gap-x-3 group:w-10">
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

          <div className="mx-auto">
            <Image
              src={AboutProfileSample4}
              alt=""
              className="rounded-[3rem] rounded-br-[10rem] lg:rounded-bl-[10rem] lg:rounded-br-[3rem]"
            />
            <h1 className="mt-4 text-primary text-lg font-semibold three-dots">دایانا</h1>
            <h2 className="mt-2 text-dark text-base three-dots">طراحی رابط کاربری و تجربه کاربری</h2>

            <div className="mt-3 w-full flex items-center gap-x-3 group:w-10">
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
          <div className="mx-auto">
            <Image
              src={AboutProfileSample4}
              alt=""
              className="rounded-[3rem] rounded-bl-[10rem] lg:rounded-br-[10rem] lg:rounded-bl-[3rem]"
            />
            <h1 className="mt-4 text-primary text-lg font-semibold three-dots">دایانا</h1>
            <h2 className="mt-2 text-dark text-base three-dots">طراحی رابط کاربری و تجربه کاربری</h2>

            <div className="mt-3 w-full flex items-center gap-x-3 group:w-10">
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
          <div className="mx-auto">
            <Image src={AboutProfileSample4} alt="" className="rounded-[3rem] rounded-br-[10rem] " />
            <h1 className="mt-4 text-primary text-lg font-semibold three-dots">دایانا</h1>
            <h2 className="mt-2 text-dark text-base three-dots">طراحی رابط کاربری و تجربه کاربری</h2>

            <div className="mt-3 w-full flex items-center gap-x-3 group:w-10">
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
        </div>
      </section>
    </main>
  );
}

export default About;
