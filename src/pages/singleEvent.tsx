import head from "../modules/head";

import { useLocation } from "react-router-dom";

import AnimatedPage from "../components/animatedPage";
import PathContainer from "../components/singleEvent/pathContainer";
import Sidebar from "../components/singleEvent/sidebar";
import Comments from "../components/singleEvent/comments";
import EventInfo from "../components/singleEvent/eventInfo";
import SingleEventEvents from "../components/singleEvent/singleEventEvents";

// Icons
import InProgressIcon from "./../assets/icons/header/in-progress.svg";

// MVP assets
import AavandProfile from "../assets/mvp/aavand.webp";
import hamyarLogo from "../assets/mvp/hamyar-logo.webp";
import hamyarSpace from "../assets/mvp/hamyar-space.webp";

import "../styles/singleEvent.scss";

function Event() {
  const location = useLocation();

  const eventName = decodeURI(location.pathname.split("/")[2].replaceAll("-", " "));

  var english = /^[A-Za-z0-9]*$/;

  head({ title: `Dev Event • ${eventName}` });

  const event = {
    title: eventName,
    supporter: "همیار اکادمی",
    date: "14 مرداد ماه 1400",
    time: "16:00 بعداظهر",
    meal: "صبحانه کله پاچه",
    cost: 256000,
    link: "https://www.google.com/",
    filledNum: 285,
    capacityNum: 302,
    saved: false,
    images: [hamyarSpace, hamyarSpace, hamyarSpace],
    logo: hamyarLogo,
    locationLink: "https://goo.gl/maps/TYNykj9YJx2pggqs6",
    dsrc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    comments: [
      {
        name: "ایمان مدائنی",
        date: "1400/06/05",
        time: "8:56 بعد از ظهر",
        likesCount: 123,
        profile: AavandProfile,
        positions: ["توسعه دهنده فرانت اند", "عضو انجمن برنامه نویسان"],
        text: "سلام . از اینکه در چنین رویداد با این سطح از تجربه و دانش افراد شرکت کردم راضی هستم :) پذیرایی عالی بود و حرف نداشت .امیدوارم سال بعد بهتر و پرقدرت از امسال باز هم برگذار بشه . دکتر آوند بعنوان ارائه کننده اطلاعات بسیار جامع و مفیدی ارائه و انتقال دادن. در کل حرف نداشت 👌",
        replies: [
          {
            name: "دکتر اوند",
            date: "1400/06/05",
            time: "8:56 بعد از ظهر",
            likesCount: 53,
            profile: AavandProfile,
            positions: ["توسعه دهنده فرانت اند", "عضو انجمن برنامه نویسان"],
            text: "سلام . از اینکه در چنین رویداد با این سطح از تجربه و دانش افراد شرکت کردم راضی هستم :) پذیرایی عالی بود و حرف نداشت .امیدوارم سال بعد بهتر و پرقدرت از امسال باز هم برگذار بشه . دکتر آوند بعنوان ارائه کننده اطلاعات بسیار جامع و مفیدی ارائه و انتقال دادن. در کل حرف نداشت 👌",
          },
          {
            name: "محمد مدائنی",
            date: "1400/06/05",
            time: "8:56 بعد از ظهر",
            likesCount: 3,
            profile: AavandProfile,
            positions: ["توسعه دهنده فرانت اند", "عضو انجمن برنامه نویسان"],
            text: "سلام . از اینکه در چنین رویداد با این سطح از تجربه و دانش افراد شرکت کردم راضی هستم :) پذیرایی عالی بود و حرف نداشت .امیدوارم سال بعد بهتر و پرقدرت از امسال باز هم برگذار بشه . دکتر آوند بعنوان ارائه کننده اطلاعات بسیار جامع و مفیدی ارائه و انتقال دادن. در کل حرف نداشت 👌",
          },
        ],
      },
      {
        name: "ایمان مدائنی",
        date: "1400/06/05",
        time: "8:56 بعد از ظهر",
        likesCount: 19,
        profile: AavandProfile,
        positions: ["توسعه دهنده فرانت اند", "عضو انجمن برنامه نویسان"],
        text: "سلام . از اینکه در چنین رویداد با این سطح از تجربه و دانش افراد شرکت کردم راضی هستم :) پذیرایی عالی بود و حرف نداشت .امیدوارم سال بعد بهتر و پرقدرت از امسال باز هم برگذار بشه . دکتر آوند بعنوان ارائه کننده اطلاعات بسیار جامع و مفیدی ارائه و انتقال دادن. در کل حرف نداشت 👌",
        replies: [],
      },
    ],
  };

  return (
    <AnimatedPage>
      <main className="event">
        <PathContainer eventName={eventName} />

        <div className="event__container">
          <div className={"header__container"}>
            <img src={InProgressIcon} alt="" />
            <h1>
              <span className={english.test(eventName[0]) ? "english" : undefined}>{eventName}</span>
            </h1>
          </div>

          <div className="container__content">
            <EventInfo {...event} />

            <Sidebar />
          </div>
        </div>

        <Comments comments={event.comments} />

        <SingleEventEvents />
      </main>
    </AnimatedPage>
  );
}

export default Event;
