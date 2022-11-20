import callIcon from "./../assets/icons/tel.svg";
import webIcon from "./../assets/icon.png";

import "../styles/footer.scss";
function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__container__call-us">
          <span>تماس</span>
          <a href="https://google.com" target={"_blank"} rel="noreferrer " aria-label="call technical support">
            <img src={callIcon} alt="" loading="lazy" />
          </a>
          <a href="https://google.com" target={"_blank"} rel="noreferrer" aria-label="call business support">
            <img src={callIcon} alt="" loading="lazy" />
          </a>
        </div>
        <figure className="footer__container__info">
          <div className="info__name-logo">
            <img src={webIcon} alt="" loading="lazy" />
            <figcaption>رویداد</figcaption>
          </div>
          <p>تمامی حقوق مادی و معنوی برای این وبسایت محفوظ است. ©1400</p>
        </figure>
        <div className="footer__container__links">
          <a>درباره</a>
          <a>قوانین</a>
          <a>خط مشی</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
