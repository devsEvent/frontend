import React from "react";
import Image from "next/image";

import { PresenterLogoSample } from "../../public";
import { PeopleRedIcon } from "../../public/icons";

function Sidebar() {
  const price: number = 125000;

  return (
    <aside className="w-full py-12 px-4 lg:w-[24%] h-full flex items-center flex-col gap-y-3 border rounded-2xl">
      <Image src={PresenterLogoSample} alt="" className="w-20 h-20 object-cover rounded-full" />

      <h2 className="text-dim-dark text-sm">برگزار کننده | حامی رویداد</h2>

      <h1 className="w-full text-lg font-medium text-center three-dots">همیار آکادمی</h1>

      <div className="mt-20 p-3 w-[16rem] flex items-center justify-between text-tomato text-sm border rounded-xl">
        <div className="flex items-center gap-x-3">
          <Image src={PeopleRedIcon} alt="" className="w-4" />
          <span>تکمیل شده</span>
        </div>
        <span>۲۸۵ نفر</span>
      </div>

      <div className="p-3 w-[16rem] flex items-center justify-between">
        <span className="w-[30%] text-lg font-semibold">مبلغ کل</span>
        <h4 className="w-[70%] text-lg text-end">
          {price === 0 ? "رایگان" : price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </h4>
      </div>

      <button className="py-3 w-[16rem] bg-primary text-white rounded-xl">خبرم کن</button>
    </aside>
  );
}

export default Sidebar;
