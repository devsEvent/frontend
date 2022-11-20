import { Link } from "react-router-dom";
import ArrowLeftBtn from "../arrowLeftBtn";

interface Props {
  imageSpace: string;
  title: string;
  dscr: string;
}

function SidebarEvent({ imageSpace, title, dscr }: Props) {
  return (
    <div className="more__event event">
      <div className="event__image">
        <img src={imageSpace} alt="" />
      </div>
      <div className="event__content">
        <h5>{title}</h5>
        <p>{dscr}</p>
      </div>
      <Link to={`/events/${title.replaceAll(" ", "-")}`}>
        <ArrowLeftBtn />
      </Link>
    </div>
  );
}

export default SidebarEvent;
