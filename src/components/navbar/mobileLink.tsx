
import { NavLink } from "react-router-dom";

interface Props {
  icon: string;
  header: string;
  path: string;
  home?: boolean | undefined;
}

function MobileLink(props: Props) {
  return (
    <NavLink end={props.home ? true : undefined} to={props.path}>
      <li className="menu__item item">
        <div className="item__icon">
          <img src={props.icon} alt="" />
        </div>

        <h1>{props.header}</h1>
      </li>
    </NavLink>
  );
}

export default MobileLink;
