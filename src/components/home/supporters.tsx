import Header from "../header";

import { SwiperSlide } from "swiper/react";
import SliderWrapper from "../sliderWrapper";

// Icons
import ChartIcon from "../../assets/icons/header/chart.svg";

// Supporters Icons
import RTLLogo from "../../assets/supportersLogo/rtl-theme.svg";
import ZhakatLogo from "../../assets/supportersLogo/zhakat.svg";
import DigikalaLogo from "../../assets/supportersLogo/digikala.svg";
import IranHostLogo from "../../assets/supportersLogo/iran-host.svg";
import SevenLearnLogo from "../../assets/supportersLogo/7learn.svg";

import "../../styles/supporters.scss";



function Supporters() {
  return (
    <section className="home__supporters supporters">
      <Header title="اسپانسرها و حامیان" icon={ChartIcon} />

      <div className="supporters__list">
        <SliderWrapper direction="horizontal" pagination={false}>
          <SwiperSlide>
            <img src={SevenLearnLogo} alt="" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={DigikalaLogo} alt="" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ZhakatLogo} alt="" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={RTLLogo} alt="" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={IranHostLogo} alt="" loading="lazy" />
          </SwiperSlide>
        </SliderWrapper>
      </div>
    </section>
  );
}

export default Supporters;
