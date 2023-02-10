"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import Header from "../../components/elements/header";
import HeaderBox from "../../components/elements/headerBox";
import { AndAArrayContentType, QAndAArrayContent } from "./questions";

import { AddIcon, ArrowOutlineIcon, SearchIcon } from "../../public/icons";

function QAndA() {
  // index of selected field
  const [selectedField, setSelectedField] = useState(0);

  const [expandedQuestionIndex, setExpandedQuestionIndex] = useState<null | number>(null);

  // the array of fields title
  const QAndAArray: string[] = ["ساخت ایونت", "برگزاری ایونت", "ثبت نام", "برنامه نویس ها", "طراحان", "قوانین"];

  return (
    <main className="flex flex-col items-center px-3 mt-24">
      <header className="flex flex-col items-center">
        <HeaderBox>سوالات متداول</HeaderBox>

        <Header>موضوع موردنظرتان را جستجو کرده یا از دسته‌بندی زیر انتخاب کنید</Header>
      </header>

      <div className="mt-8 p-2 w-full lg:w-[35rem] flex items-center rounded-full border">
        <input
          type="text"
          className="w-full pr-2 outline-none text-dark placeholder:text-dim-dark"
          placeholder="جستجوی موضوع"
        />

        <button>
          <Image src={SearchIcon} alt="" className="w-11" />
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between w-full gap-4 mt-10 lg:justify-center">
        {QAndAArray.map((item: string, index: number) => (
          <button
            key={index}
            onClick={() => {
              setSelectedField(index);
              setExpandedQuestionIndex(null);
            }}
            className={`py-4 w-[47.5%] lg:w-[10rem] flex flex-col items-center rounded-2xl gap-y-4 font-medium ${
              selectedField === index ? "bg-primary text-white" : "bg-secondary text-dark"
            }`}
          >
            <Image
              src={AddIcon}
              alt=""
              className={`${selectedField === index ? "invert-0" : "invert-[1] opacity-20"}`}
            />
            <h2>{item}</h2>
          </button>
        ))}
      </div>

      <div className="mt-4 px-2 lg:px-0 w-full lg:w-[65rem]">
        {QAndAArrayContent[selectedField].map((item: AndAArrayContentType, index: number) => (
          <div
            key={index}
            className={`my-4 p-3 rounded-xl border overflow-hidden ${
              expandedQuestionIndex === index ? "h-fit" : "h-14"
            }`}
          >
            <button
              className="flex items-center justify-between w-full h-8 font-medium"
              onClick={() => {
                if (index === expandedQuestionIndex) {
                  setExpandedQuestionIndex(null);
                } else {
                  setExpandedQuestionIndex(index);
                }
              }}
            >
              <h4>{item.title}</h4>

              <Image
                alt=""
                src={ArrowOutlineIcon}
                className={`w-5 ${expandedQuestionIndex === index && "rotate-180"}`}
              />
            </button>

            <p className="px-2 mt-4 text-sm leading-9 text-dark opacity-90">{item.answer}</p>
          </div>
        ))}
      </div>

      <button className="px-12 py-3 mt-16 text-white bg-primary rounded-2xl">
        <Link href="/contact">جواب سوال خود را پیدا نکرده ام</Link>
      </button>
    </main>
  );
}

export default QAndA;
