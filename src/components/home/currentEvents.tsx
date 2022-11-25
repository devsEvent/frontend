import { Link } from "react-router-dom";

import Header from "../header";

// header icon
import TimerIcon from "../../assets/icons/timer";
import WatchIcon from "../../assets/icons/watch.svg";
import TicketIcon from "../../assets/icons/ticket.svg";
import DateIcon from "../../assets/icons/date.svg";
import TeaIcon from "../../assets/icons/tea.svg";
import InProgressIcon from "../../assets/icons/header/in-progress.svg";

// Event example images
import EventImage from "../../assets/mvp/dev-summit.webp";
import EventSpaceImage from "../../assets/mvp/event-image.webp";

import "../../styles/currentEvent.scss";
import LocationIcon from "../../assets/icons/location";

function CurrentEvents() {
  const caption =
    "اولین رویداد تخصصی جامعه توسعه دهندگان ایران که توسط مرجع رسمی فروش قالب و فروش افزونه ژاکت راه اندازی شده است";

  return (
    <section className="home__current-event current-event">
      <Header title="رویداد های در حال برگذاری ... " icon={InProgressIcon} />

      <figure className="current-event__container container">
        <div className="container__image">
          <img src={EventSpaceImage} alt="" />
        </div>

        <div className="container__content content">
          <div className="content__header header">
            {/* these are for orange box notches */}
            <span className="notch">
              <b />
              <b />
            </span>
            <span className="notch">
              <b />
              <b />
            </span>
            <span className="notch">
              <b />
              <b />
            </span>
            <span className="notch">
              <b />÷
              <b />
            </span>

            <img src={EventImage} alt="" className="content__header__image" loading="lazy" />
            <figcaption>رویداد Dev Summit</figcaption>
            <summary>{caption.length >= 110 ? caption.slice(0, 128) + "..." : caption}</summary>

            <div className="top-container">
              <div className="top-container__timer">
                <TimerIcon />

                <time>
                  <span>03</span>:<span>07</span>: <span>15</span>
                </time>
              </div>
              {true && (
                <div className="top-container__ticket">
                  <img src={TicketIcon} alt="" />
                </div>
              )}
            </div>
          </div>
          <div className="content__list list">
            <div className="list__item item">
              <div className="item__image">
                <LocationIcon />
              </div>
              <span>تهران ، بزرگراه شهید حسن رفسنجانی هتل قلب....</span>
            </div>
            <div className="list__item">
              <div className="item__image">
                <img src={WatchIcon} alt="" />
              </div>
              <span>14:00 بعداظهر</span>
            </div>
            <div className="list__item">
              <div className="item__image">
                <img src={DateIcon} alt="" />
              </div>
              <span>یکشنبه 16 مرداد ماه 1400</span>
            </div>
            <div className="list__item">
              <div className="item__image">
                <img src={TeaIcon} alt="" />
              </div>
              <span>عصرانه ، شام</span>
            </div>
          </div>
          <div className="content__buttons">
            <button className="btn capacity-human">ظرفیت ثبت نام تکمیل</button>

            <Link to={`/events/${"Dev Summit"}`}>
              <button className="btn accept single-item">مشاهده جزئیات</button>
            </Link>
          </div>
        </div>
      </figure>
    </section>
  );
}

export default CurrentEvents;
