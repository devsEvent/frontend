import { Link } from "react-router-dom";

import SidebarEvent from "./sidebarEvent";

import MoreIcon from "../../assets/icons/more.svg";
import RedirectIcon from "../../assets/icons/redirect.svg";
import CheckIcon from "../../assets/icons/check-outline.svg";
import hamyarSpace from "../../assets/mvp/hamyar-space.webp";

import "../../styles/singleEventSidebar.scss";

function Sidebar() {
  return (
    <aside className="event__sidebar sidebar upAndDownBadges">
      <div className="sidebar__header header">
        <div className="header__content content">
          <div className="content__icon">
            <img src={CheckIcon} alt="" />
          </div>
          <span>رویداد هفته آینده</span>
        </div>
        <Link to={"/events"}>
          <button className="btn see-all-details">مشاهده همه</button>
        </Link>
      </div>

      <div className="sidebar__watch watch">
        <img src={hamyarSpace} alt="" className="watch__space" />
        <a href="https://google.com" target={"_blank"} rel="noreferrer">
          <button>
            <img src={RedirectIcon} alt="" />

            <span>مشاهده رویداد</span>
          </button>
        </a>
      </div>
      <div className="sidebar__header header-second">
        <div className="header__content content">
          <div className="content__icon">
            <img src={MoreIcon} alt="" />
          </div>

          <span>رویداد هفته آینده</span>
        </div>
        <Link to={"/events"}>
          <button className="btn see-all-details">مشاهده همه</button>
        </Link>
      </div>

      <div className="sidebar__more">
        <SidebarEvent
          title="Skillup Quera"
          imageSpace={hamyarSpace}
          dscr="
          این رویداد توسط مرجع رسمی آموزشی کشور یعنی کوئرا برگذار شده که مدرک آن به تمامی شرکت کنند 
          "
        />
        <SidebarEvent
          title="Dev Summit"
          imageSpace={hamyarSpace}
          dscr="
          این رویداد توسط مرجع رسمی آموزشی کشور یعنی کوئرا برگذار شده که مدرک آن به تمامی شرکت کنند 
          "
        />
        <SidebarEvent
          title="رویداد Skillup Quera"
          imageSpace={hamyarSpace}
          dscr="
          این رویداد توسط مرجع رسمی آموزشی کشور یعنی کوئرا برگذار شده که مدرک آن به تمامی شرکت کنند 
          "
        />
      </div>
      <form className="sidebar__newsletters">
        <input type="email" placeholder="در خبرنامه ایمیلی ما عضو شوید" />
        <button className="btn submit">ثبت</button>
      </form>
    </aside>
  );
}

export default Sidebar;
