import { memo } from "react";

import { Link } from "react-router-dom";

import { Event } from "../types";
import { NumSeparate } from "../modules/numberSeparate";

import CostIcon from "../assets/icons/cost";
import LocationIcon from "../assets/icons/location";
import CompassIcon from "../assets/icons/header/compass.svg";

import hamyarLogo from "../assets/mvp/hamyar-logo.webp";
import hamyarSpace from "../assets/mvp/hamyar-space.webp";

import "../styles/eventPreview.scss";

function EventPreview({ event }: { event: Event }) {
  return (
    <div className="eventPreview">
      <div className="eventPreview__content content">
        <div className="content__header header">
          <img src={hamyarSpace} alt="" className="header__image" loading="lazy" />
          <div className="header__logoContainer logoContainer">
            <img src={hamyarLogo} alt="" className="logoContainer__logo" loading="lazy" />
          </div>
        </div>
        <div className="content__caption caption">
          <div className="caption__item">
            <div className="caption__item__icon">
              <img src={CompassIcon} alt="" />
            </div>
            <span>{event.title}</span>
          </div>
          <div className="caption__item">
            <div className="caption__item__icon">
              <CostIcon color="#47B044" />
            </div>
            <span>{NumSeparate(event.price)} تومان</span>
          </div>
          <div className="caption__item">
            <div className="caption__item__icon location">
              <LocationIcon color="#398DCB" />
            </div>
            <span>{event.isOnline ? "آنلاین" : event.Address}</span>
          </div>
        </div>
        <Link to={`/events/${event.slug}`}>
          <div className="content__button">
            <button className="btn accept secondary">مشاهده جزئیات رویداد</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default memo(EventPreview);
