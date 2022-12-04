import { useState, useEffect } from "react";

import { Event } from "../types";

import head from "../modules/head";
import { EventsFilterContext } from "../modules/FilterContext";

import Banner from "../components/events/banner";
import Sidebar from "../components/events/sidebar";
import EventPreview from "../components/eventPreview";
import AnimatedPage from "../components/animatedPage";
import HeaderEvents from "../components/events/header";
import HeaderFilterBar from "../components/events/headerFilterBar";
import ResponsiveFilterBlock from "../components/events/responsiveFilterBlock";

import FilterIcon from "../assets/icons/FilterIcon";

import "../styles/events.scss";

const defaultValues = {
  locationFilter: "همه جای ایران",
  typeFilter: ["جشنواره", "رویداد", "بوت کمپ آموزشی", "دورهمی"],
  maxCost: 750000,
};

function Events() {
  head({ title: "Dev Events • Events" });

  const [events, setEvents] = useState<{ countAll: number; result: Event[] | [] }>({ countAll: 0, result: [] });

  const [maxCost, setMaxCost] = useState<number>(defaultValues.maxCost);

  const [isMobileFilterSectionCollapsed, setIsMobileFilterSectionCollapsed] = useState(true);

  const [locationFilter, setLocationFilter] = useState<string>(defaultValues.locationFilter);

  const [typeFilter, setTypeFilter] = useState<string[]>(defaultValues.typeFilter);

  const [maxCostFilter, setMaxCostFilter] = useState<number>(defaultValues.maxCost);

  const url = `http://localhost:5000/events?page=${1}&limit=${10}&price=${maxCostFilter}&location=${locationFilter}&eventType=${
    typeFilter[0]
  }`;

  const eventsFetch = async () => {
    try {
      const response = await fetch(url);

      const data = await response.json();

      setEvents(data);
      console.log(url);
    } catch (err) {
      console.error(err);
    }
  };

  const locationHandler = (location: string) => {
    setLocationFilter(location);
  };

  const typeHandler = (e: any) => {
    const { value, checked } = e.target;

    if (checked) {
      setTypeFilter([...typeFilter, value]);
    } else {
      setTypeFilter(typeFilter.filter((type) => type !== value));
    }
  };

  const maxCostFilterHandler = (maxCost: number) => {
    setMaxCostFilter(maxCost);
  };

  const SetMobileSectionFilterCollapsed = () => {
    setIsMobileFilterSectionCollapsed((prevValue) => !prevValue);
  };

  const MaxCostHandler = (e: any) => {
    setMaxCost(+e.target.value);
  };

  const resetHandler = () => {
    setMaxCost(defaultValues.maxCost);
    setTypeFilter(defaultValues.typeFilter);
    setMaxCostFilter(defaultValues.maxCost);
    setLocationFilter(defaultValues.locationFilter);
  };

  useEffect(() => {
    eventsFetch();
    console.log(locationFilter, typeFilter, maxCostFilter);
  }, [locationFilter, typeFilter, maxCostFilter]);

  return (
    <AnimatedPage>
      <div className="events">
        <HeaderEvents />

        <HeaderFilterBar />

        <main>
          <EventsFilterContext.Provider
            value={{
              maxCost,
              MaxCostHandler,
              typeHandler,
              locationFilter,
              locationHandler,
              maxCostFilter,
              maxCostFilterHandler,
            }}
          >
            <>
              <Sidebar DEFAULTCOSTMAX={defaultValues.maxCost} resetHandler={resetHandler} />

              <ResponsiveFilterBlock
                resetHandler={resetHandler}
                DEFAULTCOSTMAX={defaultValues.maxCost}
                SetMobileSectionFilterCollapsed={SetMobileSectionFilterCollapsed}
                isMobileFilterSectionCollapsed={isMobileFilterSectionCollapsed}
              />
            </>
          </EventsFilterContext.Provider>
          <section>
            <Banner />

            <div className="filter_header">
              <div>
                <span>فیلتر براساس</span>
                <select>
                  <option value="rate">امتیاز</option>
                  <option value="date">زمان</option>
                  <option value="cost">قیمت</option>
                </select>
              </div>

              <span className="filter_count">
                <span>{events.countAll}</span> آیتم توسط جستجو پیدا شد
              </span>
            </div>
            <button className="filter__mobileFilterButton" onClick={SetMobileSectionFilterCollapsed}>
              <FilterIcon />
              <p>فیلتر</p>
            </button>

            <div className="events_box">
              {events.result.map((item, index) => (
                <EventPreview event={item} key={index} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </AnimatedPage>
  );
}

export default Events;
