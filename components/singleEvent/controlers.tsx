"use client";

import React from "react";
import Image from "next/image";

import { MessageIcon, SaveIcon, ShareIcon } from "../../public/icons";

function Controlers() {
  return (
    <div className="md:absolute w-full md:w-fit top-2 left-4 mt-3 flex items-center justify-evenly md:justify-start md:flex-col gap-3">
      <button className="active:opacity-50 transition-opacity">
        <Image src={SaveIcon} alt="" />
      </button>
      <button
        className="active:opacity-50 transition-opacity"
        onClick={() => {
          document.getElementById("comments")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <Image src={MessageIcon} alt="" />
      </button>
      <button className="active:opacity-50 transition-opacity">
        <Image src={ShareIcon} alt="" />
      </button>
    </div>
  );
}

export default Controlers;
