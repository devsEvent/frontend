import React from "react";
import Link from "next/link";
import Image from "next/image";

import { EventPreviewImage } from "../../public";
import { TimeIcon } from "../../public/icons";

import { Event } from "../../types";

function EventPreview({ event }: { event: Event }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="px-3 py-4 relative block w-full max-w-[20rem] lg:w-[20rem] bg-secondary rounded-2xl shadow-sm animation-fade-in"
    >
      <Image src={EventPreviewImage} alt={event.title} className="w-full rounded-2xl" />

      <p className="mt-3 text-dark opacity-50 text-[.9rem] w-full">{event.start_day}</p>
      <h2 className="mt-3 font-semibold text-[.95rem] lg:text-[1.1rem] three-dots">{event.title}</h2>

      <p className="mt-3 text-dark opacity-50 text-[.9rem] h-[4rem] w-full overflow-hidden">{event.description}</p>
      <button className="mt-4 w-full text-left text-[.9rem] text-primary underline">بیشتر</button>

      <time className="py-3 px-4 absolute top-6 left-5 bg-primary-3 flex items-center gap-x-3 rounded-full">
        <Image src={TimeIcon} alt="clock icon" className="mt-[-.125rem] w-5" />

        <span className=" text-white text-[.8rem]">۰۸ : ۰۰ : ۰۸</span>
      </time>
    </Link>
  );
}

export default EventPreview;
