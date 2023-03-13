import React from "react";

function EventPreviewLoading() {
  return (
    <div className="px-3 py-4 relative block w-[85vw] max-w-[20rem] lg:w-[20rem] bg-secondary rounded-2xl shadow-sm">
      <div className="w-full h-[15rem] rounded-2xl shadow-sm loading" />

      <div className="mt-4 w-[75%] h-[1rem] loading" />
      <div className="mt-4 w-full h-[1.5rem] loading" />

      <div className="mt-5 w-full h-[1rem] loading" />
      <div className="mt-3 w-full h-[1rem] loading" />
      <div className="mt-7 mr-[80%] w-[20%] h-[1rem] loading" />
    </div>
  );
}

export default EventPreviewLoading;
