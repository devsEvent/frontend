import React from "react";

function HeaderBox({ text }: { text: string }) {
  return <h1 className="py-3 px-6 bg-secondary-1 bg-secondary text-primary rounded-3xl">{text}</h1>;
}

export default HeaderBox;
