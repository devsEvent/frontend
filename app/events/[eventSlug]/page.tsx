import React from "react";
import Image from "next/image";

import SingleEventSlider from "./slider";
import HeaderSlider from "./headerSlider";
import Comment from "../../../components/comment";
import Header from "../../../components/elements/header";
import HeaderBox from "../../../components/elements/headerBox";

import {
  CalendarWhiteIcon,
  DollarsIcon,
  FoodIcon,
  LocationIcon,
  LocationWhiteIcon,
  MessageIcon,
  PeopleIcon,
  PeopleRedIcon,
  SaveIcon,
  ShareIcon,
  TimeIcon,
  TimerIcon,
} from "../../../public/icons";
import { Banner2, EventPreviewImage, EventSampleImage, PresenterLogoSample, SampleAvatar } from "../../../public";

type Props = {
  params: { eventSlug: string };
};

function SingleEvent({ params }: Props) {
  const details = [
    { title: "تهران ; میدان آزادی", imageIcon: LocationWhiteIcon },
    {
      title: "رایگان",
      imageIcon: DollarsIcon,
    },
    {
      title: "یک‌شنبه ۱۳ آذر ۱۴۰۱",
      imageIcon: CalendarWhiteIcon,
    },
    {
      title: "ساعت ۰۸:۰۰ - ۱۳:۰۰",
      imageIcon: TimerIcon,
    },
    {
      title: "به همراه پذیرایی ناهار و شام",
      imageIcon: FoodIcon,
    },
    {
      title: "ظرفیت ۲۰۵ نفر",
      imageIcon: PeopleIcon,
    },
  ];

  const price = "125000";

  return (
    <main className="mt-20 flex items-center flex-col">
      <header className="p-4 lg:p-9 flex items-center flex-col">
        <HeaderBox>جزییات رویداد</HeaderBox>

        <Header>هر آنچه که لازمه در مورد رویداد در حال برگزاری بدانید ...</Header>
      </header>

      <div className="mb-8 p-4 md:p-9 w-full flex md:justify-between items-center xl:items-start gap-y-4 flex-col xl:flex-row">
        <section className="relative p-4 w-full xl:w-[75%] h-full border rounded-2xl">
          <div className="flex flex-col md:flex-row w-full gap-5">
            <div className="relative w-full h-full md:w-[45%] rounded-2xl overflow-hidden">
              <HeaderSlider />
              <div className="mt-2 h-[5rem] lg:h-[6rem] hidden md:flex items-center justify-between">
                <div className="relative w-[23.5%] h-full rounded-xl overflow-hidden">
                  <Image src={EventSampleImage} alt="" className="w-full h-full object-cover" />

                  <span className="absolute top-0 h-full w-full flex items-center justify-center text-2xl font-semibold text-dark bg-white bg-opacity-50">
                    +۱۰
                  </span>
                </div>
                <Image src={EventSampleImage} alt="" className="w-[23.5%] h-full rounded-xl" />
                <Image src={EventSampleImage} alt="" className="w-[23.5%] h-full rounded-xl" />
                <Image src={EventSampleImage} alt="" className="w-[23.5%] h-full rounded-xl" />
              </div>

              <time className="py-2 lg:py-3 px-3 lg:px-4 absolute top-3 right-3 bg-primary-3 flex items-center gap-x-2 lg:gap-x-3 rounded-full z-[4]">
                <Image src={TimeIcon} alt="clock icon" className="lg:mt-[-.125rem] w-4 lg:w-5" />

                <span className=" text-white text-[.6rem] lg:text-[.8rem]">۰۸ : ۰۰ : ۰۸</span>
              </time>
            </div>

            <div className="w-full md:w-[50%] flex flex-col">
              <h1 className="pl-10 w-full text-dim-dark text-[.8rem] md:text-lg three-dots">
                رویداد فرانت چپتر میزبانی برج میلاد تهران
              </h1>

              <ul className="mt-3 h-full flex flex-col justify-between bg-opacity-50">
                {details.map((item, index) => (
                  <li key={index} className="mt-4 lg:mt-6 flex items-center gap-x-3 lg:gap-x-4">
                    <div className="p-1 lg:p-[.35rem] bg-primary rounded-lg rounded-bl-none">
                      <Image src={item.imageIcon} alt="" />
                    </div>

                    <h3 className="lg:pl-10 w-full text-[.8rem] lg:text-base text-dark three-dots">{item.title}</h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="text-dark font-semibold text-xl">توضیحات</h4>
            <p className="mt-3 pl-3 max-h-[20rem] lg:max-h-[14rem] text-dim-dark text-sm leading-8 overflow-auto customize-scrollbar customize-scrollbar-thin">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
              متون بلکه روزنامه و مجله لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
              و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
            </p>
          </div>

          <div className="md:absolute w-full md:w-fit top-2 left-4 mt-3 flex items-center justify-evenly md:justify-start md:flex-col gap-3">
            <button className="active:opacity-50 transition-opacity">
              <Image src={SaveIcon} alt="" />
            </button>
            <button className="active:opacity-50 transition-opacity">
              <Image src={MessageIcon} alt="" />
            </button>
            <button className="active:opacity-50 transition-opacity">
              <Image src={ShareIcon} alt="" />
            </button>
          </div>
        </section>

        <aside className="w-full py-12 px-4 lg:w-[24%] h-full flex items-center flex-col gap-y-3 border rounded-2xl">
          <Image src={PresenterLogoSample} alt="" className="w-20 h-20 object-cover rounded-full" />
          <h2 className="text-dim-dark text-sm">برگزار کننده | حامی رویداد</h2>
          <h1 className="w-full text-lg font-medium text-center three-dots">همیار آکادمی</h1>
          <div className="mt-20 p-3 w-[16rem] flex items-center justify-between text-tomato text-sm border rounded-xl">
            <div className="flex items-center gap-x-3">
              <Image src={PeopleRedIcon} alt="" className="w-4" />
              <span>تکمیل شده</span>
            </div>
            <span>۲۸۵ نفر</span>
          </div>
          <div className="p-3 w-[16rem] flex items-center justify-between">
            <span className="w-[30%] text-lg font-semibold">مبلغ کل</span>
            <h4 className="w-[70%] text-lg text-end">
              {price == "0" ? "رایگان" : price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h4>
          </div>
          <button className="py-3 w-[16rem] bg-primary text-white rounded-xl">خبرم کن</button>
        </aside>
      </div>

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

      <section className="p-4 lg:p-9 w-full">
        <Header>نظرات شرکت کنندگان</Header>

        <form className="relative mt-8 border rounded-xl w-full ">
          <textarea
            placeholder="نظر خودتون رو در مورد این برنامه بنویسید ..."
            className="p-4 w-full min-h-[15rem] max-h-[25rem] text-sm md:text-base text-dim-dark outline-none"
          />

          <button className="py-2 md:py-3 px-6 md:px-8 absolute bottom-5 left-4 text-sm lg:text-base bg-primary text-white rounded-xl outline">
            ثبت نظر
          </button>
        </form>

        <div className="flex flex-col items-center">
          <Comment
            name="مهدی نظری"
            date={"۱۲ خرداد ۱۴۰۱"}
            time={"ساعت ۰۹:۰۰ ظهر"}
            logoImage={SampleAvatar}
            stack={"دولوپر فرانت اند"}
            text={"به شدت راضی بودم عالی بود :)"}
            replies={[
              {
                name: "ویتو محققیان",
                date: "۱۲ خرداد ۱۴۰۱",
                time: "ساعت ۰۹:۰۰ ظهر",
                text: "به شدت راضی بودم عالی بود :)",
                stack: "Front-end Dev",
                logoImage: SampleAvatar,
              },
              {
                name: "محمد محققیان",
                date: "۱۲ خرداد ۱۴۰۱",
                time: "ساعت ۰۹:۰۰ ظهر",
                text: "به شدت راضی بودم عالی بود :)",
                stack: "Front-end Dev",
                logoImage: SampleAvatar,
              },
            ]}
          />

          <button className="mt-6 py-2 w-full md:w-fit md:py-3 px-14 text-white bg-primary rounded-xl">بیشتر</button>
        </div>
      </section>

      <section className="mt-10 flex flex-col items-center w-full">
        <header className="flex flex-col items-center">
          <HeaderBox>رویداد های اخیر</HeaderBox>

          <Header>برترین دورهمی ها و ایونت ها</Header>
        </header>

        <SingleEventSlider />
      </section>
    </main>
  );
}

export default SingleEvent;
