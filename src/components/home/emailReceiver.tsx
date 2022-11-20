import { useState, FormEvent } from "react";

import SendIcon from "../../assets/icons/send.svg";
import EmailIcon from "../../assets/icons/email.svg";

import "../../styles/emailReceiver.scss";

function EmailReceiver() {
  const [SentEmail, setSentEmail] = useState(false);

  const emailFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSentEmail(true);
  };

  return (
    <section className="home__email-reciever email-reciever">
      <h5>از اینا بیشترم هست!</h5>
      <p className="first">
        میتونی با عضو شدن تو خبرنامه Dev رویداد ، میتونی از رویداد ها ، ورکشاپ های آموزشی و جلسات هفتگی کارخانه نوآوری
        ها باخبر بشی .
      </p>

      <p className="last">درضمن قول می‌دیم که اسپم نکنیم و فقط اخبار مهم رو ارسال کنیم :)</p>

      <form className="email-reciever__form form" onSubmit={emailFormHandler}>
        <img src={EmailIcon} alt="" className="form__icon" loading="lazy" />
        <div className="form__input">
          <input type="email" placeholder="آدرس ایمیل شما" />
        </div>

        <button className={`form__button ${SentEmail && "active"}`}>
          <span>{SentEmail ? "عضو شدم" : "عضو میشم"}</span>

          <img src={SendIcon} alt="" />
        </button>
      </form>
    </section>
  );
}

export default EmailReceiver;
