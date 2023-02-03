"use client";

import React, { useState } from "react";

import useSWR from "swr";
import ReactPaginate from "react-paginate";

import Searchbar from "./searchbar";
import Header from "../../components/elements/header";
import EventPreview from "../../components/eventPreview";
import HeaderBox from "../../components/elements/headerBox";
import EventPreviewLoading from "../../components/eventPreview/loading";

import { Event } from "../../types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type SWRType = {
  error: any;
  data: { result: Event[]; countAll: number };
};

type formDataType = {
  [key: string]: string | null;
};

const DEFAULTFORMDATA: formDataType = {
  price: null,
  title: null,
  location: null,
};

function Page() {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const [formData, setFormData] = useState(DEFAULTFORMDATA);

  const { data, error }: SWRType = useSWR(
    `http://localhost:5000/events/search?page=${selectedPage}&limit=10&lcoation=${formData.location}&price=${formData.price}&title=${formData.title}`,
    fetcher
  );

  const handlePageClick = (event: any) => {
    setSelectedPage(event.selected + 1);
  };

  const searchHandler = (e: any) => {
    e.preventDefault();

    const locationInput = e.target[1];

    const priceInput = e.target[2];

    const location = locationInput.selectedIndex === 0 ? null : locationInput[locationInput.selectedIndex].innerHTML;

    const price = priceInput.selectedIndex === 0 ? null : priceInput[priceInput.selectedIndex].innerHTML;

    const newFromData = {
      price: price,
      location: location,
      title: e.target[0].value,
    };

    setFormData(newFromData);
  };

  return (
    <main className="mt-20 p-3 lg:p-9">
      <header className="flex flex-col items-center">
        <HeaderBox>جستجو کنید</HeaderBox>

        <div className="px-4 lg-px-0">
          <Header>رویداد ها ، همایش ، کمپین های آموزشی و جشنواره ها</Header>
        </div>

        <Searchbar searchHandler={searchHandler} />
      </header>

      <div className="mt-6 w-full flex items-start flex-col-reverse lg:flex-row gap-y-4">
        <div className="w-full">
          <section className="px-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6 overflow-x-hidden w-full">
            {data
              ? data.result.map((item: Event, index: number) => <EventPreview event={item} key={index} />)
              : [...new Array(6)].map((item, index) => <EventPreviewLoading key={index} />)}
          </section>

          <div className="flex items-center justify-center lg:block h-20 overflow-x-hidden">
            <ReactPaginate
              pageCount={1}
              breakLabel="..."
              nextLabel="بعدی"
              previousLabel="قبلی"
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"mt-6 lg:mr-2 flex items-center justify-end flex-row-reverse gap-x-2 lg:gap-x-3 "}
              pageClassName={
                "flex items-center justify-center h-6 lg:h-8 text-[.75rem] lg:text-base rounded-full text-primary border-primary border"
              }
              pageLinkClassName={"pt-1 px-2 lg:px-3 w-full h-full rounded-full"}
              activeClassName={"h-6 lg:h-8 rounded-full !text-white bg-primary"}
              breakClassName={
                "flex items-center justify-center border-primary pt-1 border px-2 lg:px-3 h-6 lg:h-8 rounded-full text-primary"
              }
              nextClassName={
                "flex items-center justify-center px-2 lg:px-3 h-6 lg:h-8 text-[.75rem] lg:text-base rounded-full text-primary border-primary border"
              }
              previousClassName={
                "flex items-center justify-center px-3 h-6 lg:h-8 text-[.75rem] lg:text-base rounded-full text-primary border-primary border"
              }
              disabledClassName={"hidden"}
            />
          </div>
        </div>

        <aside className="lg:sticky top-0 p-4 h-full w-full lg:w-[30%] flex flex-row lg:flex-col items-center gap-4 border-dim-grey border-2 rounded-2xl overflow-x-scroll lg:overflow-x-auto customize-scrollbar snap-x">
          <div className="h-[10rem] shrink-0 snap-center w-[16rem] lg:w-full bg-primary-3 rounded-2xl" />
          <div className="h-[10rem] shrink-0 snap-center w-[16rem] lg:w-full bg-primary-3 rounded-2xl" />
          <div className="h-[10rem] shrink-0 snap-center w-[16rem] lg:w-full bg-primary-3 rounded-2xl" />
          <div className="h-[10rem] shrink-0 snap-center w-[16rem] lg:w-full bg-primary-3 rounded-2xl" />
        </aside>
      </div>
    </main>
  );
}

export default Page;
