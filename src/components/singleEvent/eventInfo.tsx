import { useState } from "react";

import { SwiperSlide } from "swiper/react";

import SliderWrapper from "../../components/sliderWrapper";
import { NumSeparate } from "../../modules/numberSeparate";

import CostIcon from "../../assets/icons/cost";
import FilledCapacityIcon from "../../assets/icons/filled-capacity.svg";
import RemainingCapacityIcon from "../../assets/icons/remaining-capacity.svg";
import TeaIcon from "../../assets/icons/tea.svg";
import DateIcon from "../../assets/icons/date.svg";
import WatchIcon from "../../assets/icons/watch.svg";
import CheckOutlineIcon from "../../assets/icons/check-outline.svg";

import "../../styles/eventInfo.scss";

interface Props {
  title: string;
  supporter: string;
  date: string;
  time: string;
  meal: string;
  cost: number;
  link: string;
  filledNum: number;
  capacityNum: number;
  saved: boolean;
  images: string[];
  logo: string;
  locationLink: string;
  dsrc: string;
}

function EventInfo(props: Props) {
  const [saved, setSaved] = useState<boolean>(props.saved);

  const saveHandler = () => {
    setSaved((prevValue) => !prevValue);
  };

  return (
    <section className="content__block">
      <div className="block__header header">
        <div className="header__right right">
          <div className="right__top top">
            <div className="top__header header">
              <div className="header__content content">
                <div className="content__logo">
                  <img src={props.logo} alt="" loading="lazy" />
                </div>
                <div className="content__name">
                  <h4>برگزار کننده | حامی رویداد</h4>
                  <h2>{props.supporter}</h2>
                </div>
              </div>

              <svg
                width="25"
                height="33"
                viewBox="0 0 25 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`header__save ${saved && "checked"}`}
                onClick={saveHandler}
              >
                {saved ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.436995 6.02011C0 7.33248 0 8.95411 0 12.1973V25.0697C0 28.4102 0 30.0805 0.610635 30.9638C1.35662 32.043 2.65675 32.6264 3.9819 32.4768C5.06661 32.3544 6.36624 31.2674 8.96548 29.0934C10.1096 28.1364 10.6818 27.6579 11.3102 27.4413C12.0801 27.1758 12.9199 27.1758 13.6898 27.4413C14.3182 27.6579 14.8903 28.1364 16.0345 29.0934C18.6337 31.2674 19.9334 32.3544 21.0181 32.4768C22.3432 32.6264 23.6434 32.043 24.3894 30.9638C25 30.0805 25 28.4102 25 25.0697V12.1973C25 8.95411 25 7.33248 24.563 6.02011C23.6798 3.36773 21.5487 1.28823 18.8305 0.426415C17.4856 0 15.8237 0 12.5 0C9.17628 0 7.51442 0 6.16949 0.426415C3.4513 1.28823 1.32019 3.36773 0.436995 6.02011ZM7.14286 9.14801C6.40319 9.14801 5.80357 9.73311 5.80357 10.4549C5.80357 11.1766 6.40319 11.7617 7.14286 11.7617H17.8571C18.5968 11.7617 19.1964 11.1766 19.1964 10.4549C19.1964 9.73311 18.5968 9.14801 17.8571 9.14801H7.14286Z"
                    fill="#2D264B"
                  />
                ) : (
                  <>
                    <path
                      d="M8.09832 9.67743C7.43024 9.67743 6.88865 10.219 6.88865 10.8871C6.88865 11.5552 7.43024 12.0968 8.09832 12.0968H17.7757C18.4438 12.0968 18.9854 11.5552 18.9854 10.8871C18.9854 10.219 18.4438 9.67743 17.7757 9.67743H8.09832Z"
                      fill="#2D264B"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.676 2.62548e-05C9.92393 -0.000406838 8.24457 -0.00067103 6.84535 0.453963C4.02194 1.37134 1.80835 3.58493 0.890975 6.40834C0.436341 7.80756 0.436605 9.48692 0.437038 12.239L0.437065 24.4699C0.437054 25.9695 0.437046 27.168 0.509743 28.0909C0.581377 29.0003 0.733733 29.8629 1.19543 30.5473C2.12189 31.9208 3.73657 32.6634 5.38231 32.473C6.20246 32.3781 6.95654 31.9325 7.69363 31.395C8.44167 30.8496 9.35165 30.0696 10.4902 29.0937L10.5318 29.058C11.646 28.103 11.9632 27.8576 12.2653 27.7508C12.6999 27.5973 13.1741 27.5973 13.6087 27.7508C13.9109 27.8576 14.228 28.103 15.3422 29.058L15.3838 29.0936C16.5224 30.0696 17.4323 30.8496 18.1804 31.395C18.9175 31.9325 19.6716 32.3781 20.4917 32.473C22.1375 32.6634 23.7521 31.9208 24.6786 30.5473C25.1403 29.8629 25.2926 29.0003 25.3643 28.0909C25.437 27.168 25.437 25.9695 25.437 24.47L25.437 12.239C25.4374 9.48693 25.4377 7.80756 24.983 6.40834C24.0657 3.58493 21.8521 1.37134 19.0287 0.453963C17.6295 -0.00067103 15.9501 -0.000406838 13.198 2.62548e-05H12.676ZM7.59297 2.7549C8.57959 2.43432 9.84081 2.4194 12.937 2.4194C16.0332 2.4194 17.2944 2.43432 18.2811 2.7549C20.3679 3.43296 22.0041 5.06909 22.6821 7.15595C23.0027 8.14258 23.0176 9.40379 23.0176 12.5V24.415C23.0176 25.982 23.0167 27.0846 22.9524 27.9009C22.8862 28.742 22.7627 29.0612 22.6729 29.1944C22.2518 29.8187 21.5178 30.1563 20.7698 30.0697C20.6102 30.0513 20.2875 29.9372 19.6058 29.4401C18.9441 28.9577 18.1064 28.2408 16.9167 27.2211L16.7567 27.0837C15.8823 26.3329 15.2004 25.7473 14.4147 25.4697C13.4585 25.1319 12.4155 25.1319 11.4593 25.4697C10.6736 25.7473 9.99174 26.3329 9.11738 27.0837L8.95735 27.2211C7.76766 28.2408 6.92991 28.9577 6.26825 29.4401C5.58655 29.9372 5.26384 30.0513 5.10425 30.0697C4.35618 30.1563 3.62224 29.8187 3.20112 29.1944C3.11128 29.0612 2.98787 28.742 2.92162 27.9009C2.85731 27.0846 2.85641 25.982 2.85641 24.415V12.5C2.85641 9.40379 2.87133 8.14258 3.19191 7.15595C3.86997 5.06909 5.5061 3.43296 7.59297 2.7549Z"
                      fill="#2D264B"
                    />
                  </>
                )}
              </svg>
            </div>
            <div className="top__title title">
              <div className="title__image">
                <img src={CheckOutlineIcon} alt="" />
              </div>
              <h2>{props.title}</h2>
            </div>
            <div className="top__details">
              <div className="details__item">
                <div>
                  <img src={DateIcon} alt="" />
                </div>
                <span>{props.date}</span>
              </div>
              <div className="details__item">
                <div>
                  <img src={WatchIcon} alt="" />
                </div>
                <span>{props.time}</span>
              </div>
              <div className="details__item">
                <div>
                  <img src={TeaIcon} alt="" />
                </div>
                <span>{props.meal}</span>
              </div>
              <div className="details__item">
                <div>
                  <CostIcon />
                </div>
                <span>{props.cost === 0 ? "رایگان" : `${NumSeparate(props.cost)} تومان`}</span>
              </div>
            </div>
            <a href={props.link} target={"_blank"} rel="noreferrer">
              <button className="btn accept secondary">ثبت نام زود هنگام</button>
            </a>
          </div>
          <div className="right__bottom">
            <div className="bottom__item">
              <div className="item__logo">
                <img src={FilledCapacityIcon} alt="" />

                <span className="item__title">تکمیل شده</span>
              </div>
              <span className="item__content">
                <span className="content__count">{props.filledNum}</span>
                <span className="content__unit">نفر</span>
              </span>
            </div>
            <div className="bottom__item item">
              <div className="item__logo">
                <img src={RemainingCapacityIcon} alt="" />

                <span className="item__title">ظرفیت رویداد</span>
              </div>
              <span className="item__content">
                <span className="content__count">{props.capacityNum}</span>
                <span className="content__unit">نفر</span>
              </span>
            </div>
          </div>
        </div>

        <div className="header__left left">
          <figure className="left__top">
            <SliderWrapper direction="horizontal" pagination>
              {props.images.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item} alt="" loading="lazy" />
                </SwiperSlide>
              ))}
            </SliderWrapper>
          </figure>

          <div className="left__location location">
            <a href={props.locationLink} target="_blank" rel="noreferrer" className="location__link link">
              <span>لوکیشن رویداد روی نقشه</span>
            </a>
          </div>
        </div>
      </div>
      <div className="block__dscr">
        <h6>توضیحات</h6>
        <p>{props.dsrc}</p>
      </div>
    </section>
  );
}

export default EventInfo;
