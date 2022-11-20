import { useState } from "react";
import { Link } from "react-router-dom";

import { NumSeparate } from "../../modules/numberSeparate";

import TimerIcon from "../../assets/icons/timer";
import RateIcon from "../../assets/icons/rate";
import CostIcon from "../../assets/icons/cost";
import MapIcon from "../../assets/icons/map.svg";
import LocationIcon from "../../assets/icons/location";
import CompassIcon from "../../assets/icons/header/compass.svg";
interface Props {
  eventImage: string;
  spaceImage: string;
  title: string;
  cost: number;
  location: string;
  time: number;
  star: number;
  locationLink: string;
}

function HomeEvent(props: Props) {
  const [liked, setLiked] = useState<boolean>(false);

  const likeHandler = () => {
    setLiked((prevValue) => !prevValue);
  };

  return (
    <div className="events__container__content content">
      <div className="content__header">
        <img src={props.spaceImage} alt="" className="header__space" loading="lazy" />
        <div className="header__logo">
          <img src={props.eventImage} alt="" loading="lazy" />
        </div>
        <div className="header__timer">
          <TimerIcon />

          <time>
            <span>03 </span>: <span>07 </span>: <span>15 </span>
          </time>
        </div>

        <div className="header--hover hover">
          <button className="hover__location">
            <a target={"_blank"} href={props.locationLink} rel="noreferrer">
              مشاهده روی نقشه
            </a>

            <img src={MapIcon} alt="" loading="lazy" />
          </button>
          <div className="hover__rate rate">
            <div className="rate__caption">
              <span>{props.star}</span>
              <RateIcon />
            </div>
            <button className="rate__like like">
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={likeHandler}
                className={liked ? "like--checked" : "like--unchecked"}
              >
                <path
                  d="M4.00001 6.77673C4.2068 6.10613 4.57722 5.47603 5.14527 4.91284C5.59251 4.46941 6.05668 4.17698 6.52241 4M12.6007 2.14593C14.2743 1.08425 16.9773 0.0803204 19.3115 2.46071C24.8525 8.11136 15.3502 19 11 19C6.64988 19 -2.85249 8.11136 2.68853 2.46072C5.02272 0.0803466 7.72564 1.08427 9.39929 2.14593C10.345 2.74582 11.655 2.74582 12.6007 2.14593Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="content__caption caption">
        <div className="caption__item item">
          <div className="item__icon">
            <img src={CompassIcon} alt="" />
          </div>
          <span>{props.title}</span>
        </div>
        <div className="caption__item">
          <div className="caption__item__icon">
            <CostIcon color="#47B044" />
          </div>
          <span className={props.cost === 0 ? "free" : ""}>
            {props.cost === 0 ? "رایگان" : `${NumSeparate(props.cost)} تومان`}
          </span>
        </div>
        <div className="caption__item">
          <div className="caption__item__icon">
            <LocationIcon />
          </div>
          <span>{props.location}</span>
        </div>
      </div>
      <Link to={`/events/${props.title.replaceAll(" ", "-")}`}>
        <div className="content__button">
          <button className="btn accept primary">مشاهده جزئیات رویداد</button>
        </div>
      </Link>
    </div>
  );
}

export default HomeEvent;
