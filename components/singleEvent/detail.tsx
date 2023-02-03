import React from "react";
import Image from "next/image";

function Detail({ item }: { item: { title: string; imageIcon: string } }) {
  return (
    <li className="mt-4 lg:mt-6 flex items-center gap-x-3 lg:gap-x-4">
      <div className="p-1 lg:p-[.35rem] bg-primary rounded-lg rounded-bl-none">
        <Image src={item.imageIcon} alt="" />
      </div>

      <h3 className="lg:pl-10 w-full text-[.8rem] lg:text-base text-dark three-dots">{item.title}</h3>
    </li>
  );
}

export default Detail;
