import React from "react";

import Header from "../components/header";
import AllEventsSection from "./allEventsSection";
import BestEventsSection from "./bestEventsSection";
import SignUpSection from "../components/signUpHome";
import UserComments from "../components/userComments";
import EmailSettler from "../components/emailSettler";

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
