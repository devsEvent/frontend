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
      className={`px-4 lg:px-0 opacity-50 text-dark flex items-center py-3 ${
        pathname == path
          ? "bg-primary lg:bg-transparent text-white lg:!text-primary opacity-100 font-bold link-badge"
          : ""
      }`}
    >
      <Link href={`${path}`} className="w-full h-full">
        {title}
      </Link>
    </li>
  );
}

export default NavLink;
