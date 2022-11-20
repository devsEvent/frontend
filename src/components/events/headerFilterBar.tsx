import CostIcon from "../../assets/icons/cost";
import LocationIcon from "../../assets/icons/location";
import SearchIcon from "../../assets/icons/SearchIcon";

import "../../styles/eventsHeaderFilterbar.scss";

function HeaderFilterBar() {
  return (
    <>
      <div className="header_filter">
        <div className="filter_menu">
          <div className="menu_item">
            <SearchIcon color="#DA9E03" />

            <input type="text" placeholder="دنبال چی هستی این مهمه !!" />
          </div>
          <div className="menu_seprater" />
          <div className="menu_item">
            <LocationIcon />

            <select defaultChecked>
              <option value="ask" disabled>
                کجا باشه خوبه ؟
              </option>
              <option value="">اصفهان</option>
              <option value="">تهران</option>
              <option value="">شیراز</option>
            </select>
          </div>
          <div className="menu_seprater" />
          <div className="menu_item">
            <CostIcon color="#da9e03" />

            <select defaultChecked>
              <option value="">قیمتش چند باشه ؟</option>
              <option value="">اصفهان</option>
              <option value="">تهران</option>
              <option value="">شیراز</option>
            </select>
          </div>
          <button className="btn primary">جستجو</button>
        </div>
      </div>
      <div className="events_filterbar">
        <h3>فیلتر نتایج براساس</h3>
        <div className="filterbar__list">
          <button className="btn secondary">
            <input type="checkbox" />
            <span>دورهمی</span>
          </button>
          <button className="btn secondary">
            <input type="checkbox" />
            <span>رویداد</span>
          </button>
          <button className="btn secondary">
            <input type="checkbox" />
            <span>همایش</span>
          </button>
          <button className="btn secondary">
            <input type="checkbox" />
            <span>جشنواره ها</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default HeaderFilterBar;
