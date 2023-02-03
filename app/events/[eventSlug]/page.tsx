import React from "react";

import Comment from "../../../components/comment";
import Header from "../../../components/elements/header";
import HeaderBox from "../../../components/elements/headerBox";
import SingleEventSlider from "../../../components/singleEvent/slider";
import NewComment from "../../../components/singleEvent/newComment";
import Sidebar from "../../../components/singleEvent/sidebar";
import Details from "../../../components/singleEvent/details";
import ADS from "../../../components/singleEvent/ads";

import { singleEventProps } from "../../../types";

import { SampleAvatar } from "../../../public";

function SingleEvent({ params }: singleEventProps) {
  return (
    <main className="mt-20 flex items-center flex-col">
      <header className="p-4 lg:p-9 flex items-center flex-col">
        <HeaderBox>جزییات رویداد</HeaderBox>
        <Header>هر آنچه که لازمه در مورد رویداد در حال برگزاری بدانید ...</Header>
      </header>

      <div className="mb-8 p-4 md:p-9 w-full flex md:justify-between items-center xl:items-start gap-y-4 flex-col xl:flex-row">
        <Details />

        <Sidebar />
      </div>

      <ADS />

      <section className="p-4 lg:p-9 w-full" id="comments">
        <Header>نظرات شرکت کنندگان</Header>

        <NewComment />

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
