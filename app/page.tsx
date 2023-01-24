import React from "react";

import Header from "../components/header";
import UserComments from "../components/userComments";
import BestEventsSection from "./bestEventsSection";
import AllEventsSection from "./allEventsSection";

function Page() {
  return (
    <div className="h-screen">
      <Header />

      <AllEventsSection />

      <UserComments />

      <BestEventsSection />
    </div>
  );
}

export default Page;
