import React from "react";

import { Event } from "../../types";

const fetchEvents = async () => {
  try {
    const res = await fetch(`http://localhost:5000/events/search?limit=10&page=1`);

    const data = res.json();

    return data;
  } catch {
    throw new Error("ha ha ha ha");
  }
};

async function Header() {
  const data: Event | undefined = await fetchEvents();

  console.log(data);

  return <div>{!data ? "error" : "fine!"}</div>;
}

export default Header;
