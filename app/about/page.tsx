import React from "react";
import Image from "next/image";

import Person from "../../components/about/person";
import Header from "../../components/elements/header";
import HeaderBox from "../../components/elements/headerBox";

import { AboutImageSample, AboutImageSample2, AboutImageSample3, AboutImageSample4 } from "../../public";

function About() {
  return (
    <main className="p-3 mt-20 lg:p-9">
      <header className="flex flex-col items-center">
        <HeaderBox>درباره ما</HeaderBox>

        <Header>تیم ما و چگونگی شکل گیری دو ایونت</Header>
      </header>

      <article className="px-2 mt-10 lg:px-0">
        <div className="flex items-center justify-between h-[10rem] md:h-[20rem] lg:h-[35rem]">
          <Image src={AboutImageSample2} alt="" className="w-[27.5%] h-full rounded-3xl" />
          <Image src={AboutImageSample} alt="" className="w-[70%] h-full rounded-3xl" />
        </div>

        <section className="mt-10">
          <h2 className="text-base text-primary">شروع در سال 1401</h2>
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

        <section className="flex flex-col-reverse justify-between gap-8 mt-10 lg:flex-row">
          <div className="">
            <h2 className="text-base text-primary">شروع در سال 1401</h2>
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
        <section className="flex flex-col justify-between gap-8 mt-10 lg:flex-row">
          <Image src={AboutImageSample4} alt="" className="h-full w-full lg:w-[45%] rounded-3xl" />
          <div className="">
            <h2 className="text-base text-primary">شروع در سال 1401</h2>
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

      <section className="flex flex-col items-center mt-10">
        <HeaderBox>شروع در سال 1401</HeaderBox>
        <Header>تیم دو ایونت</Header>

        <div className="grid w-full grid-cols-1 px-2 mt-8 lg:px-0 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8">
          <Person />
          <Person />
          <Person />
          <Person />
        </div>
      </section>
    </main>
  );
}

export default About;
