import { Link } from "react-router-dom";

import ArrowLeftBtn from "../../components/arrowLeftBtn";

import TimerIcon from "../../assets/icons/timer";

// MVP assets
import hamyarLogo from "../../assets/mvp/hamyar-logo.webp";
import hamyarSpace from "../../assets/mvp/hamyar-space.webp";

import "../../styles/banner.scss";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_logo">
        <img src={hamyarLogo} alt="" />
      </div>
      <div className="banner_content">
        <a>رویداد رفرش کانف دورهمی برنامه نویسان بک اند</a>
        <h4>
          مکان
          <span>اصفهان چهارباغ نبش مسجد جامع سالن همایش قیاصی </span>
        </h4>
        <div className="content_details">
          <div className="details_cost">
            <span>1،500,000 </span> تومان
          </div>
          <div className="capacity">
            <span style={{ color: 3 < 10 ? "#ff4e4e" : undefined }}>3</span> نفر تا تکمیل ظرفیت
          </div>
        </div>
      </div>
      <div className="banner_spaces">
        {Array.apply(0, new Array(4))
          .slice(0, 3)
          .map((item, index) => (
            <Link key={index} to="/events/دورهمی-برنامه-نویسان-بک-اند" >
              <img src={hamyarSpace} alt="" key={index} />
            </Link>
          ))}
        {Array.apply(0, new Array(5)).length > 3 ? (
          <Link className="spaces_more" to="/events/دورهمی-برنامه-نویسان-بک-اند">
            <img src={hamyarSpace} alt="" />
            <div className="more_count">
              <span>3</span>+
            </div>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="banner_timer">
        <TimerIcon />

        <time>
          <span>03 </span>: <span>07 </span>: <span>15 </span>
        </time>
      </div>
      <Link to="/events/دورهمی-برنامه-نویسان-بک-اند">
        <ArrowLeftBtn />
      </Link>
    </div>
  );
}

export default Banner;
