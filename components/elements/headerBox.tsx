import React, { ReactNode } from "react";

function HeaderBox({ children }: { children: ReactNode }) {
  return <h1 className="py-3 px-6 text-[.65rem] lg:text-base bg-secondary text-primary rounded-3xl">{children}</h1>;
}

export default HeaderBox;
