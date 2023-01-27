import React from "react";

import Searchbar from "./searchbar";
import Header from "../../components/elements/header";
import HeaderBox from "../../components/elements/headerBox";
import EventPreview from "../../components/eventPreview";

function Page() {
  return (
    <main className="p-9">
      <header className="flex flex-col items-center">
        <HeaderBox>جستجو کنید</HeaderBox>

        <Header>رویداد ها ، همایش ، کمپین های آموزشی و جشنواره ها</Header>

        <Searchbar />

        <div className="mt-6 w-full flex items-start">
          <section className="px-2 w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
            <EventPreview />
            <EventPreview />
            <EventPreview />
            <EventPreview />
            <EventPreview />
            <EventPreview />
            <EventPreview />
            <EventPreview />
          </section>

          <aside className="p-4 w-[30%] hidden lg:flex flex-col items-center gap-y-4 border-dim-grey border-2 rounded-2xl">
            <div className="h-[10rem] w-full bg-primary-3 rounded-2xl" />
            <div className="h-[10rem] w-full bg-primary-3 rounded-2xl" />
            <div className="h-[10rem] w-full bg-primary-3 rounded-2xl" />
            <div className="h-[10rem] w-full bg-primary-3 rounded-2xl" />
          </aside>
        </div>
      </header>
    </main>
  );
}

export default Page;
