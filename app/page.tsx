import React from "react";

import Header from "../components/header";
import SignUpSection from "../components/signUpHome";
import EmailSettler from "../components/emailSettler";
import UserComments from "../components/userComments";
import AllEventsSection from "../components/homeEventsSections/allEventsSection";
import BestEventsSection from "../components/homeEventsSections/bestEventsSection";

import { getEvents } from "../modules/getEvents";

async function Page() {
  const latestEvents = await getEvents(`${process.env.SERVER_URL}/events?&page=1&limit=8`);

  const bestEvents = await getEvents(`${process.env.SERVER_URL}/events?&page=1&limit=8`);

  return (
    <main className="pt-24">
      <Header />

      <AllEventsSection events={latestEvents} />

      <UserComments />

      <SignUpSection />

      <BestEventsSection events={bestEvents} />

      <EmailSettler />
    </main>
  );
}

export default Page;
