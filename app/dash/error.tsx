"use client";

import React from "react";

function Error({ error, reset }: { error: Error; reset: () => void }) {
  React.useEffect(() => {
    console.log("errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
  }, [error]);

  return <div>Error</div>;
}

export default Error;
