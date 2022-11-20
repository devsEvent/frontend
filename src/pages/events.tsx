import { useState } from "react";

import head from "../modules/head";

import Sidebar from "../components/events/sidebar";
import EventPreview from "../components/eventPreview";
import AnimatedPage from "../components/animatedPage";
import HeaderEvents from "../components/events/header";
import HeaderFilterBar from "../components/events/headerFilterBar";
import ResponsiveFilterBlock from "../components/events/responsiveFilterBlock";

import FilterIcon from "../assets/icons/FilterIcon";

import "../styles/events.scss";
import Banner from "../components/events/banner";

const DEFAULTCOSTMAX = 750000;

function Events() {
  head({ title: "Dev Events • Events" });

  const [maxCost, setMaxCost] = useState<number>(DEFAULTCOSTMAX);

  const [isMobileFilterSectionCollapsed, setIsMobileFilterSectionCollapsed] = useState(true);

  const SetMobileSectionFilterCollapsed = () => {
    setIsMobileFilterSectionCollapsed((prevValue) => !prevValue);
  };

  const MaxCostHandler = (e: any) => {
    setMaxCost(e.target.value);
  };

  // first we need to convert maxCost to string because of split method then reverse array because we
  // seprate numbers from right to left then join charaters to together to make it ready for match method
  // in which this will seprate 3 by 3 charaters after that we need to reverse these 3 by 3 charaters
  // because these reversed in the first stage
  // in the end due to reversing cost we have to reverse it again to neutralize the first one.
  const sepratedMaxCost = maxCost
    .toString()
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g)
    ?.map((item) => item.toString().split("").reverse().join(""))
    ?.reverse()
    ?.join(",");

  return (
    <AnimatedPage>
      <div className="events">
        <HeaderEvents />

        <HeaderFilterBar />

        <main>
          <Sidebar
            maxCost={maxCost}
            setMaxCost={setMaxCost}
            DEFAULTCOSTMAX={DEFAULTCOSTMAX}
            MaxCostHandler={MaxCostHandler}
            sepratedMaxCost={sepratedMaxCost}
          />

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
                <span>100</span> آیتم توسط جستجو پیدا شد{" "}
              </span>
            </div>
            <button className="filter__mobileFilterButton" onClick={SetMobileSectionFilterCollapsed}>
              <FilterIcon />
              <p>فیلتر</p>
            </button>

            <div className="events_box">
              {Array.apply(0, new Array(5)).map((item, index) => (
                <EventPreview key={index} />
              ))}
            </div>
          </section>
        </main>

        <ResponsiveFilterBlock
          maxCost={maxCost}
          MaxCostHandler={MaxCostHandler}
          sepratedMaxCost={sepratedMaxCost}
          SetMobileSectionFilterCollapsed={SetMobileSectionFilterCollapsed}
          isMobileFilterSectionCollapsed={isMobileFilterSectionCollapsed}
        />
      </div>
    </AnimatedPage>
  );
}

export default Events;
