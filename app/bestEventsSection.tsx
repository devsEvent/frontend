import React from "react";
import Link from "next/link";
import EventPreview from "../components/eventPreview";
import HeaderBox from "../components/elements/headerBox";
import { styles } from "../styles";
import Header from "../components/elements/header";

function BestEventsSection() {
  return (
    <section className="mt-20  flex flex-col items-center">
      <HeaderBox text="برترین" />

      <Header text={"برترین دورهمی ها و ایونت ها"} />

      <div className="mt-10 px-2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
        <EventPreview />
        <EventPreview />
        <EventPreview />
        <EventPreview />
        <EventPreview />
        <EventPreview />
        <EventPreview />
        <EventPreview />
      </div>

      <Link href="" className={`mt-16 ${styles.primary}`}>
        بیشتر
      </Link>
    </section>
  );
}

export default BestEventsSection;
