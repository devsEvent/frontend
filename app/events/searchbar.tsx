import React from "react";
import Image from "next/image";

import { CalendarGrayIcon, LocationIcon, PriceIcon, SearchIconSearchbarIcon } from "../../public/icons";

function Searchbar({ searchHandler }: { searchHandler: (e: any) => void }) {
  return (
    <form
      className="mt-12 p-4 w-full flex items-center gap-4 flex-col lg:flex-row rounded-3xl lg:rounded-full border-dim-grey border"
      onSubmit={searchHandler}
    >
      <div className="py-2 px-4 h-full w-full flex items-center gap-x-3 rounded-full border-dim-grey border-2">
        <Image src={SearchIconSearchbarIcon} alt="" className="h-[1.65rem]" />

        <input
          type="text"
          placeholder="نام ایونت یا موضوع ایونت"
          className="w-full text-dark placeholder:text-dark-dim outline-none text-[.8rem] lg:text-base"
        />
      </div>
      <div className="py-2 px-3 h-full w-full flex items-center gap-3 rounded-full border-dim-grey border-2">
        <Image src={LocationIcon} alt="" className="h-[1.65rem]" />
        <select
          name=""
          id=""
          className="w-full text-dim-dark outline-none border-none bg-transparent text-[.8rem] lg:text-base text-right"
        >
          <option value="" className="hidden">
            ...شهر خود را انتخاب کنید
          </option>
          <option value="" className="bg-white">
            فرقی نمیکنه
          </option>
          <option value="" className="bg-white">
            اصفهان
          </option>
          <option value="" className="bg-white">
            تهران
          </option>
          <option value="" className="bg-white">
            شیراز
          </option>
          <option value="" className="bg-white">
            کاشان
          </option>
          <option value="" className="bg-white">
            سیستان و بلوچستان
          </option>
        </select>
      </div>
      <div className="py-2 px-3 h-full w-full flex items-center gap-x-3 rounded-full border-dim-grey border-2">
        <Image src={CalendarGrayIcon} alt="" className="h-[1.65rem]" />
        <select name="" id="" className="w-full text-dim-dark outline-none text-[.8rem] lg:text-base text-right">
          <option value="" className="hidden">
            قیمت
          </option>
        </select>
      </div>
      <div className="py-2 px-3 h-full w-full flex items-center gap-x-3 rounded-full border-dim-grey border-2">
        <Image src={PriceIcon} alt="" className="h-[1.65rem]" />
        <select name="" id="" className="w-full text-dim-dark outline-none text-[.8rem] lg:text-base text-right">
          <option value="" className="hidden">
            امروز
          </option>
        </select>
      </div>

      <button className="bg-primary py-3 px-8 rounded-full text-white font-medium w-full lg:w-fit" type="submit">
        جستجو
      </button>
    </form>
  );
}

export default Searchbar;
