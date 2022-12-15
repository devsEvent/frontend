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

  return <div className="bg-black-900 h-screen w-full"></div>;
};

export default Home;
