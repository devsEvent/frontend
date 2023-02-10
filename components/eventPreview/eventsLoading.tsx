import React from "react";

import EventPreviewLoading from "./loading";

function EventsLoading() {
  return (
    <>
      {[...new Array(8)].map((index) => (
        <EventPreviewLoading key={index} />
      ))}
    </>
  );
}

export default EventsLoading;
