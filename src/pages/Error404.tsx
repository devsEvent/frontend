import head from "../modules/head";

import { Link } from "react-router-dom";

import HomeIcon from "../assets/icons/home";
import ArrowIcon from "../assets/icons/ArrowIcon";
import HomePentagonIcon from "../assets/icons/mobileNavbar/homeIcon.svg";
import Error404Image from "../assets/error-404.png";

import "../styles/Error404.scss";

function Error404() {
  head({ title: "Dev Events • Error 404" });

  return (
    <div className="error404">
      <section className="error404__path path">
        <div className="path__link link">
          <HomeIcon className="link__icon link__icon-home" />

          <Link to={"/"}>خانه</Link>
        </div>

        <ArrowIcon />

        <div className="path__link link">
          <Link to={"/"} className="link-active">
            404
          </Link>
        </div>
      </section>

      <section className="error404__content content">
        <div className="content__notFound">صفحه تون پیدا نشد</div>
        <h1>اوه نه ! خطای 404</h1>
        <p>
          ممکنه اشتباه سرچ کردین یا شاید ما اشتباه کردیم.
          <br />
          میتونید به صفحه اصلی برگردین شاید چیز تازه ای پیدا کردین
        </p>
        <button className="content__redirect">
          <span>برگشت به صفحه اصلی</span>

          <img src={HomePentagonIcon} alt="" />
        </button>
        <img src={Error404Image} alt="" className="content__image" />
      </section>
    </div>
  );
}

export default Error404;
