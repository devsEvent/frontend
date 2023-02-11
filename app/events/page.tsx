"use client";

import React, { useEffect, useState } from "react";

import useSWR from "swr";
import ReactPaginate from "react-paginate";

import Searchbar from "../../components/events/searchbar";
import Header from "../../components/elements/header";
import Sidebar from "../../components/events/sidebar";
import EventPreview from "../../components/eventPreview";
import HeaderBox from "../../components/elements/headerBox";
import EventsLoading from "../../components/eventPreview/eventsLoading";

import { Event } from "../../types/event";

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
  basis: null,
  location: null,
};

function Page() {
  // the count of events pagination
  const [countPage, setCountPage] = useState<number>(1);

  const [selectedPage, setSelectedPage] = useState<number>(1);

  // searchbarData object
  const [searchbarData, setSearchbarData] = useState(DEFAULTFORMDATA);

  const url = `http://localhost:5000/events/search?page=${selectedPage}&limit=10&lcoation=${searchbarData.location}&price=${searchbarData.price}&title=${searchbarData.title}`;

  // get data using client side third-package
  const { data }: SWRType = useSWR(url, fetcher);

  useEffect(() => {
    if (data) {
      // get the count events pagination page
      const { countAll }: { countAll: number } = data;

      // for example to understand it better if countAll is 4 because it's lower that 10 it returns 1 and it countAll is 14 it will return 1.4 in which in react-paginate it define as 2
      setCountPage(countAll < 10 ? 1 : countAll / 10);
    }
  }, [data]);

  const handlePageClick = (event: any) => {
    setSelectedPage(event.selected + 1);
  };

  const searchHandler = (e: any) => {
    e.preventDefault();

    // get title input
    const titleInput = e.target[0].value;

    const title = typeof titleInput === "string" ? titleInput : null;

    // get location input value
    const location = e.target[1].value;

    // get price input value
    const price = e.target[2].value;

    // get basis input value
    const basis = e.target[3].value;

    // then make new obkect
    const newSearchbarData = {
      price: price,
      basis: basis,
      location: location,
      title: title,
    };

    // finally apply it to searchbarData state
    setSearchbarData(newSearchbarData);
  };

  return (
    <main className="p-3 mt-20 lg:p-9">
      <header className="flex flex-col items-center">
        <HeaderBox>جستجو کنید</HeaderBox>

        <div className="px-4 lg-px-0">
          <Header>رویداد ها ، همایش ، کمپین های آموزشی و جشنواره ها</Header>
        </div>

        <Searchbar searchHandler={searchHandler} />
      </header>

      <div className="flex flex-col-reverse items-start w-full mt-6 lg:flex-row gap-y-4">
        <div className="w-full">
          <section className="grid w-full grid-cols-1 gap-4 px-2 overflow-x-hidden lg:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {data ? (
              data.result.map((item: Event, index: number) => (
                <EventPreview
                  slug={item.slug}
                  title={item.title}
                  startDay={item.start_day}
                  description={item.description}
                  key={index}
                />
              ))
            ) : (
              <EventsLoading />
            )}
          </section>

          <div className="flex items-center justify-center h-20 overflow-x-hidden lg:block">
            <ReactPaginate
              pageCount={countPage}
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

        <Sidebar />
      </div>
    </main>
  );
}

export default Page;
