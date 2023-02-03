import React from "react";

import Header from "../components/header";
import AllEventsSection from "./allEventsSection";
import BestEventsSection from "./bestEventsSection";
import SignUpSection from "../components/signUpHome";
import EmailSettler from "../components/emailSettler";
import UserComments from "../components/userComments";

function Page() {
  return (
    <main className="pt-24">
      <Header />

      <AllEventsSection />

      <UserComments />

      <SignUpSection />

      <BestEventsSection />

      <EmailSettler />
    </main>
  );
}

export default Page;
