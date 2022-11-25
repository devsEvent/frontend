import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import WebsiteIcon from "../../assets/icon.png";
import SearchIcon from "../../assets/icons/SearchIcon";
import AvatarIcon from "../../assets/icons/AvatarIcon";

import MenuIcon from "../../assets/icons/mobileNavbar/menu.svg";
import MealIcon from "../../assets/icons/mobileNavbar/meal.svg";
import NotificationIcon from "../../assets/icons/notification.svg";
import CompassIcon from "../../assets/icons/mobileNavbar/compass.svg";

import "../../styles/navbar.scss";
import NavbarMobile from "./navbarMobile";

function Navbar() {
  const [SearchBar, setSearchBar] = useState(false);
  const [isNavExtended, setIsNavExtended] = useState(false);

  const links = [
    {
      header: "رویدادها",
      path: "/events",
      icon: CompassIcon,
    },
    {
      header: "درباره ما",
      path: "/about",
      icon: MealIcon,
    },
  ];

  const searchBarHandler = (e?: any) => {
    if (SearchBar) {
      if (e) {
        e.preventDefault();

        // * form submit codes
      }
      setSearchBar(false);
    } else {
      setSearchBar(true);
    }
  };

  const ExtendNavHandler = () => {
    setIsNavExtended((prevValue) => !prevValue);
  };

  useEffect(() => {
    // this will give us pageYOffset when component mounted
    var prevScrollpos = window.pageYOffset;

    function onScroll() {
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos >= currentScrollPos) {
          // surely this could be coded by useState
          // but this one is more optimzed.
          document.getElementById("nav")!.style.top = "0";
          // top 0 is regular navbar top property so it makes  it visiable.
        } else {
          document.getElementById("nav")!.style.top = "-100%";
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
  }, []);

  return (
    <>
      <nav className="nav" id="nav">
        <img src={MenuIcon} alt="" onClick={ExtendNavHandler} className="nav__menuIcon" />

        <div className="nav__right">
          <Link to={"/"}>
            <figure className="nav__right__logo">
              <img src={WebsiteIcon} alt="" loading="lazy" />
              <figcaption>رویداد</figcaption>
            </figure>
          </Link>

          <ul className="nav__right__menu">
            <li>
              <NavLink end to={"/"}>
                خانه
              </NavLink>
            </li>
            {links.map((item, index) => (
              <li key={index}>
                <NavLink to={item.path} className={({ isActive }) => (isActive ? "active" : "")}>
                  {item.header}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__left">
          <button className={`nav__left__search ${SearchBar ? "search--active" : ""}`}>
            <SearchIcon color={"#2D264B"} />
            <form id="search-form" onSubmit={searchBarHandler}>
              <input type="text" placeholder="جستجوی رویداد" />
            </form>
          </button>

          <button className={true ? "notification" : ""}>
            <img src={NotificationIcon} alt="" />
          </button>

          <button>
            <Link to={"/panel"}>
              <AvatarIcon />
            </Link>
          </button>
        </div>
      </nav>

      {isNavExtended && (
        <div
          onClick={() => {
            ExtendNavHandler();
          }}
          className="nav__closer"
        />
      )}
      <NavbarMobile isNavExtended={isNavExtended} ExtendNavHandler={ExtendNavHandler} links={links} />
    </>
  );
}

export default Navbar;
