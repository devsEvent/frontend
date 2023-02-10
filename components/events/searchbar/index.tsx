import React from "react";
import Image from "next/image";

import { basisArray, PriceRanges, Provinces } from "./inputOptions";

import { CalendarGrayIcon, LocationIcon, PriceIcon, SearchIconSearchbarIcon } from "../../../public/icons";
import SelectInput from "./selectInput";

function Searchbar({ searchHandler }: { searchHandler: (e: any) => void }) {
  return (
    <form
      className="flex flex-col items-center w-full gap-4 p-4 mt-12 border lg:flex-row rounded-3xl lg:rounded-full border-dim-grey"
      onSubmit={searchHandler}
    >
      <div className="flex items-center w-full h-full px-4 py-2 border-2 rounded-full gap-x-3 border-dim-grey">
        <Image src={SearchIconSearchbarIcon} alt="" className="h-[1.65rem]" />

        <input
          type="text"
          placeholder="نام ایونت یا موضوع ایونت"
          className="w-full text-dark placeholder:text-dark-dim outline-none text-[.8rem] lg:text-base"
        />
      </div>

      <div className="flex items-center w-full h-full gap-3 px-3 py-2 border-2 rounded-full border-dim-grey">
        <Image src={LocationIcon} alt="" className="h-[1.65rem]" />
        <select className="w-full max-h-20 text-dim-dark outline-none border-none bg-transparent text-[.8rem] lg:text-base text-right">
          <option className="hidden" value="">
            ...شهر خود را انتخاب کنید
          </option>
          <option className="bg-white" value="">
            فرقی نمیکنه
          </option>

          <SelectInput options={Provinces} />
        </select>
      </div>

      <div className="flex items-center w-full h-full px-3 py-2 border-2 rounded-full gap-x-3 border-dim-grey">
        <Image src={PriceIcon} alt="" className="h-[1.65rem]" />
        <select className="w-full text-dim-dark outline-none text-[.8rem] lg:text-base text-right">
          <option value="" className="hidden">
            قیمت
          </option>

          <SelectInput options={PriceRanges} />
        </select>
      </div>

      <div className="flex items-center w-full h-full px-3 py-2 border-2 rounded-full gap-x-3 border-dim-grey">
        <Image src={CalendarGrayIcon} alt="" className="h-[1.65rem]" />
        <select className="w-full text-dim-dark outline-none border-none bg-transparent text-[.8rem] lg:text-base text-right">
          <option value="" className="hidden">
            بر اساس
          </option>

          <SelectInput options={basisArray} />
        </select>
      </div>

      <button className="w-full px-8 py-3 font-medium text-white rounded-full bg-primary lg:w-fit" type="submit">
        جستجو
      </button>
    </form>
  );
}

export default Searchbar;
