import React from "react";

function Header({ text }: { text: string }) {
  return <h1 className="mt-10 text-dark text-[.85rem] lg:text-[1.5rem] text-center font-semibold">{text}</h1>;
}

export default Header;
