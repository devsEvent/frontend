"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

import NavLink from "./navLink";

import { LoginIcon, Logo, MenuIcon, NotifactionIcon, SearchIcon } from "../../public/icons";
import { styles } from "../../styles";

function Navbar() {
  const path = usePathname();

  const [showNavbar, setShowNavbar] = useState(false);

  const showNavbarHandler = () => {
    setShowNavbar((prevValue) => !prevValue);
  };

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

  useEffect(() => {
    // this will give us pageYOffset when component mounted
    var prevScrollpos = window.pageYOffset;

    function onScroll() {
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;

        if (currentScrollPos == 0) {
          document.getElementById("navbar").style.top = "2.75rem";
        } else if (prevScrollpos >= currentScrollPos) {
          // certainly this could be coded by useState
          // but this one is more optimzed.
          document.getElementById("navbar").style.top = "0";
          // top 1rem is regular navbar top property so it makes  it visiable.
        } else {
          document.getElementById("navbar").style.top = "-5rem";
        }
        // then preScrollpos will update to current page Y offset
        // to become ready for next scroll eventListner.
        prevScrollpos = currentScrollPos;
      };
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div
      id="navbar"
      className="px-9 fixed top-11 w-full h-20 flex items-center justify-between bg-white transition-all duration-500 z-[100]"
    >
      <button className="block lg:hidden w-6" onClick={showNavbarHandler}>
        <Image src={MenuIcon} alt="" />
      </button>

      <Image src={Logo} alt="devs event logo" className="w-12 lg:w-14" />

      <ul className="hidden lg:flex items-center gap-x-8 h-full">
        {links.map((item) => (
          <NavLink path={item.path} title={item.title} pathname={path} key={item.path} />
        ))}
      </ul>

      <div className="flex items-center">
        <Image src={SearchIcon} alt="search icon" className="hidden lg:block w-12" />

        <Image src={NotifactionIcon} alt="notification icon" className="w-12" />

        <Link href="/login" className={`${styles.secondary} px-4 hidden md:flex items-center gap-x-3 `}>
          <span className="text-white">ورود</span>
          <Image src={LoginIcon} alt="login icon" className="w-5" />
        </Link>
      </div>
      <div
        className={`lg:hidden ${
          showNavbar ? "flex" : "hidden"
        } absolute top-full left-0 w-full h-fit bg-white flex-col z-50 shadow-xl`}
      >
        <ul className="border">
          {links.map((item) => (
            <NavLink path={item.path} title={item.title} pathname={path} key={item.path} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
