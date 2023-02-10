import React from "react";

function Sidebar() {
  return (
    <aside className="lg:sticky top-0 p-4 h-full w-full lg:w-[30%] flex flex-row lg:flex-col items-center gap-4 border-dim-grey border-2 rounded-2xl overflow-x-scroll lg:overflow-x-auto customize-scrollbar snap-x">
      <div className="h-[10rem] shrink-0 snap-center w-[16rem] lg:w-full bg-primary-3 rounded-2xl" />
      <div className="h-[10rem] shrink-0 snap-center w-[16rem] lg:w-full bg-primary-3 rounded-2xl" />
      <div className="h-[10rem] shrink-0 snap-center w-[16rem] lg:w-full bg-primary-3 rounded-2xl" />
      <div className="h-[10rem] shrink-0 snap-center w-[16rem] lg:w-full bg-primary-3 rounded-2xl" />
    </aside>
  );
}

export default Sidebar;
