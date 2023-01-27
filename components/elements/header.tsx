import React, { ReactNode } from "react";

function Header({ children }: { children: ReactNode }) {
  return <h1 className="mt-10 text-dark text-[.85rem] lg:text-[1.5rem] text-center font-semibold">{children}</h1>;
}

export default Header;
