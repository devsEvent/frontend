import React from "react";

import Link from "next/link";

type Props = {
  pathname: string | null;
  path: string;
  title: string;
};

function NavLink({ path, title, pathname }: Props) {
  return (
    <li
      className={`opacity-50 text-dark flex items-center py-3 ${
        pathname == path ? "!text-primary opacity-100 font-bold link-badge" : ""
      }`}
    >
      <Link href={`${path}`}>{title}</Link>
    </li>
  );
}

export default NavLink;
