import React from "react";
import Link from "next/link";
import EventPreview from "../components/eventPreview";

function BestEventsSection() {
  return (
    <section className="mt-14  flex flex-col items-center">
      <Link href="" className="py-3 px-6 bg-secondary-1 bg-secondary text-primary rounded-3xl">
        برترین
      </Link>

      <h1 className="mt-10 text-dark text-[1.5rem] font-semibold">برترین دورهمی ها و ایونت ها</h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
        <EventPreview />
        <EventPreview />
        <EventPreview />
        <EventPreview />
        <EventPreview />
        <EventPreview />
        <EventPreview />
        <EventPreview />
      </div>

      <Link href="" className="mt-16 py-3 px-12 bg-primary text-white rounded-2xl">
        بیشتر
      </Link>
    </section>
  );
}

export default BestEventsSection;
