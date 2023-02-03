import React from "react";
import Image from "next/image";

import { comment } from "../../types";

function Comment({ name, date, time, logoImage, stack, text, replies, reply }: comment) {
  return (
    <>
      <div
        className={`relative mt-5 p-4 pb-[4.5rem] w-full ${
          reply && "bg-dim-grey mr-4 w-[calc(100%-1rem)] lg:mr-8 lg:w-[calc(100%-2rem)]"
        } border rounded-xl`}
      >
        <header className="flex lg:items-center justify-between flex-col lg:flex-row gap-y-3">
          <div className="flex items-center gap-x-3">
            <Image src={logoImage} alt="" className="h-10 w-10 rounded-full" />

            <h2 className="text-sm flex flex-col lg:flex-row gap-y-1 text-dark">
              <span className="w-full lg:w-fit lg:max-w-[15rem] three-dots">{name}</span>
              <span className="hidden lg:inline-block">&nbsp;-&nbsp;</span>
              <span className="text-dim-dark w-full lg:w-fit lg:max-w-[15rem] three-dots">{stack}</span>
            </h2>
          </div>

          <time className="text-sm lg:max-w-[50%] lg:three-dots text-dim-dark">
            <span>{time}</span>&nbsp;|&nbsp;<span>{date}</span>
          </time>
        </header>

        <p className="mt-3 text-dark leading-7 lg:leading-9">{text}</p>

        <button className="py-2 md:py-3 px-6 md:px-8 absolute bottom-5 left-4 text-sm lg:text-base bg-primary text-white rounded-xl outline">
          پاسخ
        </button>
      </div>

      {replies &&
        replies.map((item, index) => (
          <Comment
            reply
            key={index}
            name={item.name}
            date={item.date}
            time={item.time}
            text={item.text}
            stack={item.stack}
            logoImage={item.logoImage}
          />
        ))}
    </>
  );
}

export default Comment;
