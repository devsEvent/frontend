import head from "../modules/head";

import AnimatedPage from "../components/animatedPage";
import { EmailReceiver, CurrentEvents, HomeEvents, Supporters, NewEvent } from "../components/home";

import "../styles/home.scss";

function HomeLayout() {
  head({ title: "Dev Event" });

  return (
    <AnimatedPage>
      <main className="home">
        <NewEvent />

        <CurrentEvents />

        <Supporters />

        <HomeEvents />

        <EmailReceiver />
      </main>
    </AnimatedPage>
  );
}

export default HomeLayout;
