import React from "react";
import Link from "next/link";

import Header from "../elements/header";
import EventPreview from "../eventPreview";
import HeaderBox from "../elements/headerBox";
import EventsLoading from "../eventPreview/eventsLoading";

import { Event } from "../../types/event";

import { styles } from "../../styles";

function LatestEvents({ events }: { events: Event[] }) {
  return (
    <section className="flex flex-col items-center mt-14">
      <HeaderBox>همه ایونت ها و دورهمی ها</HeaderBox>

      <Header>اطلاع رسانی آخرین دورهمی ها و ایونت ها</Header>

      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
        {events ? (
          events.map((item, index) => (
            <EventPreview
              key={index}
              slug={item.slug}
              title={item.title}
              startDay={item.start_day}
              description={item.description}
            />
          ))
        ) : (
          <EventsLoading />
        )}
      </div>

      <Link href="/events" className={`mt-16 py-3 px-12 ${styles.primary}`}>
        بیشتر
      </Link>
    </section>
  );
}

export default LatestEvents;
