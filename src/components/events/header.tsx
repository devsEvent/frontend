import Wave from "../../assets/icons/wave.svg";

import "../../styles/eventsHeader.scss";

function HeaderEvents() {
  return (
    <div className="events_header">
      <span>اینجا دست خالی برنمیگردی</span>
      <h2>رویداد ها ، همایش ، کمپین های آموزشی و جشنواره ها</h2>
      <p>
        اینجا میتونی همه رویداد ها جشنواره ها و و بوت کمپ های آموزشی رو پیدا کنی و بدون دغدغه از جزئیات اونا باخبر بشی .
      </p>
      <img src={Wave} alt="" />
    </div>
  );
}

export default HeaderEvents;
