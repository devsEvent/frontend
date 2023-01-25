"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

import NavLink from "./navLink";

import { LoginIcon, Logo, MenuIcon, NotifactionIcon, SearchIcon } from "../../public/icons";
import { styles } from "../../styles";

function Navbar() {
  const path = usePathname();

  const links = [
    { path: "/", title: "خانه" },
    {
      path: "/events",
      title: "رویدادها",
    },
    {
      path: "/timetable",
      title: "جدول زمان بندی",
    },
    {
      path: "/about",
      title: "درباره ما",
    },
    {
      path: "/contact",
      title: "تماس با ما",
    },
    {
      path: "/Q&A",
      title: "سوالات متداول",
    },
  ];

  return (
    <div className="w-full px-9 sticky top-11 h-20 flex items-center justify-between bg-white">
      <Image src={MenuIcon} alt="" className="block lg:hidden  w-6" />

      <Image src={Logo} alt="devs event logo" className="w-12 lg:w-14" />

      <ul className="hidden lg:flex items-center gap-x-8 h-full">
        {links.map((item) => (
          <NavLink path={item.path} title={item.title} pathname={path} key={item.path} />
        ))}
      </ul>

      <div className="flex items-center">
        <Image src={SearchIcon} alt="search icon" className="hidden lg:block w-12" />

        <Image src={NotifactionIcon} alt="notification icon" className="w-12" />

        <Link href="/login" className={`${styles.secondary} hidden md:flex items-center gap-x-3 `}>
          <span className="text-white">ورود</span>
          <Image src={LoginIcon} alt="login icon" className="w-5" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
