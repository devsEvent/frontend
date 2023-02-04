import React from "react";
import Image from "next/image";

import { Provinces } from "../../modules/IranProvinces";

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
        <select className="w-full max-h-20 text-dim-dark outline-none border-none bg-transparent text-[.8rem] lg:text-base text-right">
          <option className="hidden" value="">
            ...شهر خود را انتخاب کنید
          </option>
          <option className="bg-white" value="">
            فرقی نمیکنه
          </option>

          {Provinces.map((item, index) => (
            <option className="bg-white" value={item.value} key={index}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      <div className="py-2 px-3 h-full w-full flex items-center gap-x-3 rounded-full border-dim-grey border-2">
        <Image src={PriceIcon} alt="" className="h-[1.65rem]" />
        <select className="w-full text-dim-dark outline-none text-[.8rem] lg:text-base text-right">
          <option value="" className="hidden">
            قیمت
          </option>

          <option className="bg-white" value={0}>
            رایگان
          </option>
          <option className="bg-white" value="">
            فرقی نمیکنه
          </option>

          <option value="1000000" className="bg-white">
            تا 100,000 هزار تومان
          </option>
          <option value="250000" className="bg-white">
            تا 250,000 هزار تومان
          </option>
          <option value="500000" className="bg-white">
            تا 500,000 هزار تومان
          </option>
          <option value="750000" className="bg-white">
            تا 750,000 هزار تومان
          </option>
          <option value="1000000" className="bg-white">
            تا 1,000,000 هزار تومان
          </option>
          <option value="1500000" className="bg-white">
            تا 1,500,000 هزار تومان
          </option>
          <option value="2000000" className="bg-white">
            تا 2,000,000 هزار تومان
          </option>
          <option value="50000000" className="bg-white">
            تا 5,000,000 هزار تومان
          </option>
          <option value="10000000" className="bg-white">
            تا 10,000,000 هزار تومان
          </option>
        </select>
      </div>

      <div className="py-2 px-3 h-full w-full flex items-center gap-x-3 rounded-full border-dim-grey border-2">
        <Image src={CalendarGrayIcon} alt="" className="h-[1.65rem]" />
        <select className="w-full text-dim-dark outline-none border-none bg-transparent text-[.8rem] lg:text-base text-right">
          <option value="" className="hidden">
            بر اساس
          </option>

          <option value="rate" className="bg-white">
            امتیاز
          </option>
          <option value="lowestPrice" className="bg-white">
            کمترین قیمت
          </option>
          <option value="highestprice" className="bg-white">
            بیشترین قیمت
          </option>
          <option value="mostParticipants" className="bg-white">
            بیشترین شرکت کننده
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
