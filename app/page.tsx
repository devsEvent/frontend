import React from "react";

import Header from "../components/home/header";
import SignUpSection from "../components/home/signUp";
import BestEvents from "../components/home/bestEvents";
import HomeCommments from "../components/home/comments";
import LatestEvents from "../components/home/latestEvents";
import EmailSettler from "../components/home/emailSettler";

import { getEvents } from "../modules/getEvents";

async function Page() {
  const latestEvents = await getEvents(`${process.env.SERVER_URL}/events?&page=1&limit=8`);

  const bestEvents = await getEvents(`${process.env.SERVER_URL}/events?&page=1&limit=8`);

  return (
    <main className="pt-24">
      <Header />

      <LatestEvents events={latestEvents} />

      <HomeCommments />

      <SignUpSection />

      <BestEvents events={bestEvents} />

      <EmailSettler />
    </main>
  );
}

export default Page;
