import BoldIcon from "../../assets/icons/editor/bold.svg";
import ItalicIcon from "../../assets/icons/editor/italic.svg";
import DoubleTIcon from "../../assets/icons/editor/double-t.svg";
import UnderlineIcon from "../../assets/icons/editor/underline.svg";
import RightTextIcon from "../../assets/icons/editor/right-text.svg";
import CenterTextIcon from "../../assets/icons/editor/right-text.svg";
import JustifyTextIcon from "../../assets/icons/editor/justify-text.svg";
import OrderedListIcon from "../../assets/icons/editor/ordered-list.svg";
import UnOrderedListIcon from "../../assets/icons/editor/unordered-list.svg";
import UnderlineColorsIcon from "../../assets/icons/editor/underline-colors.svg";

import "../../styles/createComment.scss";

function CreateComment() {
  return (
    <div className="content__create create">
      <div className="create__header">
        <select name="" id="">
          <option value="paragraph">پاراگراف</option>
          <option value="heading1">عنوان اول</option>
          <option value="heading2">عنوان دوم</option>
          <option value="heading3">عنوان سوم</option>
        </select>
        <button className="first-button">
          <img src={DoubleTIcon} alt="" loading="lazy"  />
        </button>
        <button>
          <img src={UnderlineColorsIcon} alt="" loading="lazy"  />
        </button>
        <button>
          <img src={OrderedListIcon} alt="" loading="lazy"  />
        </button>
        <button>
          <img src={UnOrderedListIcon} alt="" loading="lazy"  />
        </button>
        <button>
          <img src={JustifyTextIcon} alt="" loading="lazy"  />
        </button>
        <button>
          <img src={RightTextIcon} alt="" loading="lazy"  />
        </button>
        <button>
          <img src={CenterTextIcon} alt="" loading="lazy"  />
        </button>
        <button>
          <img src={UnderlineIcon} alt="" loading="lazy"  />
        </button>
        <button>
          <img src={ItalicIcon} alt="" loading="lazy"  />
        </button>
        <button>
          <img src={BoldIcon} alt="" loading="lazy"  />
        </button>
      </div>

      <form className="create__form">
        <textarea placeholder="نظر خودتون رو در مورد این برنامه بنویسید ..." />
        <div>
          <button className="btn primary">ثبت نظر</button>
        </div>
      </form>
    </div>
  );
}

export default CreateComment;
