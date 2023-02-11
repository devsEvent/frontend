import React from "react";

import ADS from "../../../components/singleEvent/ads";
import Header from "../../../components/elements/header";
import Sidebar from "../../../components/singleEvent/sidebar";
import Comment from "../../../components/singleEvent/comment";
import HeaderBox from "../../../components/elements/headerBox";
import NewComment from "../../../components/singleEvent/newComment";
import Details from "../../../components/singleEvent/details/details";

import { getEvents } from "../../../modules/getEvents";

import { Event } from "../../../types/event";
import { singleEventProps } from "../../../types";

import { SampleAvatar } from "../../../public";
import RelatedEvents from "../../../components/singleEvent/relatedEvents";

async function SingleEvent({ params }: singleEventProps) {
  const relatedEvents = await getEvents(`${process.env.SERVER_URL}/events?page=1&limit=12&slug=${params.eventSlug}`);

  const event: Event = await getEvents(`${process.env.SERVER_URL}/events/${params.eventSlug}`);

  return (
    <main className="flex flex-col items-center mt-20">
      <header className="flex flex-col items-center p-4 lg:p-9">
        <HeaderBox>جزییات رویداد</HeaderBox>

        <Header>هر آنچه که لازمه در مورد رویداد در حال برگزاری بدانید ...</Header>
      </header>

      <div className="flex flex-col items-center w-full p-4 mb-8 md:p-9 md:justify-between xl:items-start gap-y-4 xl:flex-row">
        <Details
          title={event.title}
          price={event.price}
          address={event.address}
          starDay={event.start_day}
          catering={event.catering}
          location={event.location}
          capacity={event.capacity}
          starTime={event.start_time}
          description={event.description}
        />

        <Sidebar
          price={event.price}
          sponsor={event.sponsor}
          logoImage={event.logo_image}
          filledCapacity={event.field_capacity}
        />
      </div>

      <ADS />

      {/* <section className="w-full p-4 lg:p-9" id="comments">
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

          <button className="w-full py-2 mt-6 text-white md:w-fit md:py-3 px-14 bg-primary rounded-xl">بیشتر</button>
        </div>
      </section> */}

      <section className="flex flex-col items-center w-full mt-10">
        <header className="flex flex-col items-center">
          <HeaderBox>رویداد های اخیر</HeaderBox>

          <Header>برترین دورهمی ها و ایونت ها</Header>
        </header>

        <RelatedEvents relatedEvents={relatedEvents} />
      </section>
    </main>
  );
}

export default SingleEvent;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/events?page=1&limit=100");

  const { result }: { result: Event[] } = await res.json();

  return result.map((item) => ({
    eventSlug: item.slug.toString(),
  }));
}
