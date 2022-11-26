import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import MobileLink from "./mobileLink";
import SearchIcon from "../../assets/icons/SearchIcon";

// MVP assets
import JadiProfile from "../../assets/mvp/jadi.webp";

import LogoutIcon from "../../assets/icons/logout.svg";

import WebsiteIcon from "../../assets/icon.png";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import InfoIcon from "../../assets/icons/mobileNavbar/info.svg";
import PanelIcon from "../../assets/icons/mobileNavbar/panel.svg";
import CodeIcon from "../../assets/icons/mobileNavbar/code-icon.svg";
import MoblieHomeIcon from "../../assets/icons/mobileNavbar/homeIcon.svg";
import TelePhoneIcon from "../../assets/icons/mobileNavbar/telephone.svg";
import OtherPagesIcon from "../../assets/icons/mobileNavbar/other-pages.svg";

function NavbarMobile({
  isNavExtended,
  ExtendNavHandler,
  links,
}: {
  isNavExtended: boolean;
  ExtendNavHandler: () => void;
  links: { header: string; path: string; icon: any }[];
}) {
  return (
    <>
      <CSSTransition in={isNavExtended} timeout={300} classNames="navbar" unmountOnExit>
        <div className="nav__mobile mobile">
          <figure className="mobile__logo">
            <img src={WebsiteIcon} alt="" loading="lazy" />
            <figcaption>رویداد</figcaption>
          </figure>

          <div className="mobile__seprater" />

          <button className="mobile__closer" onClick={ExtendNavHandler}>
            <ArrowIcon />
          </button>

          <form className="mobile__searchBar">
            <button>
              <SearchIcon />
            </button>
            <input type="text" placeholder="اینجا سرچ بزن مثلا : بده بزنیم" />
          </form>

          <div className="mobile__links links">
            <ul className="links__menu menu">
              <MobileLink icon={MoblieHomeIcon} header="صفحه  اصلی" path="/" home />

              {links.map((item, index) => (
                <MobileLink icon={item.icon} header={item.header} path={item.path} key={index} />
              ))}

              <MobileLink icon={PanelIcon} header="پنل کاربری" path="/panel" />
              <MobileLink icon={TelePhoneIcon} header="تماس با ما" path="/contact" />
            </ul>

            <div className="mobile__otherPages otherPages">
              <div className="otherPages__header header">
                <img src={OtherPagesIcon} alt="" />
                <h1>صفحات دیگر</h1>
              </div>

              <MobileLink icon={InfoIcon} header="سوالات متداول" path="/commonquestions" />
              <MobileLink icon={PanelIcon} header="راهنمای ثبت رویداد" path="/guide" />
            </div>
          </div>
          <div className="mobile__footer footer">
            <svg width="360" height="70" viewBox="0 0 360 70" fill="red" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M153.074 17.2285C144.867 10.0812 136.301 0 125.418 0H0V50C0 61.0457 8.95432 70 20 70H340C351.046 70 360 61.0457 360 50V0H211.582C200.699 0 192.133 10.0812 183.926 17.2285C179.798 20.8232 174.403 23 168.5 23C162.597 23 157.202 20.8232 153.074 17.2285Z"
                fill="white"
              />
            </svg>

            <button className="footer__logout">
              <img src={LogoutIcon} alt="" loading="lazy" />
            </button>

            <div className="footer__content content">
              <div className="content__logo logo">
                <Link to={`panel/${"جادی-میرمیرانی"}`}>
                  <img src={JadiProfile} alt="" loading="lazy" />
                </Link>
                <Link to={`panel/${"جادی-میرمیرانی"}`}>
                  <div>
                    <h3>جادی میرمیرانی</h3>
                    <h4>توسعه دهنده ارشد پایتون</h4>
                  </div>
                </Link>
              </div>

              <Link to={`panel/${"جادی-میرمیرانی"}`}>
                <img src={CodeIcon} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

export default NavbarMobile;
