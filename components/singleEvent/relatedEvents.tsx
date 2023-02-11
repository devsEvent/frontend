"use client";

import React from "react";

import { SwiperSlide } from "swiper/react";

import EventPreview from "../eventPreview";
import SingleEventSlider from "./relatedEventsSlider";

import { Event } from "../../types/event";

function RelatedEvents({ relatedEvents }: { relatedEvents: Event[] }) {
  return (
    <SingleEventSlider>
      {relatedEvents.map((item: Event, index: number) => (
        <SwiperSlide className="flex items-center justify-center w-full" key={index}>
          <EventPreview slug={item.slug} title={item.title} startDay={item.start_day} description={item.description} />
        </SwiperSlide>
      ))}
    </SingleEventSlider>
  );
}

export default RelatedEvents;
