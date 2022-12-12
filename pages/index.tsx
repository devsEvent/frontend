import useSWR from "swr";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import styles from "../styles/styles";
import Loading from "../components/loading";
import { fetcher } from "../modules/fetcher";

const Home: NextPage = () => {
  const router = useRouter();

  const url = `http://localhost:5000/events/?page=${1}&limit=${10}`;

  const { data, error } = useSWR(url, fetcher);

  // if any error happend this block will run and naviagte the user to error page
  if (error) {
    router.push("/error");
  }

  // check if there's no data fetched, show loading page
  if (!data || !data.result) {
    return <Loading />;
  }

  return (
    <div className="bg-black h-screen w-full dark">
      <main className={`h-full w-full ${styles.center}`}>
        <div className="h-10 w-44  rounded-xl loading"></div>
        {data.result.map(({ slug }: { slug: string }) => (
          <div key={slug}>{slug}</div>
        ))}
      </main>
    </div>
  );
};

export default Home;
