import Head from "next/head";
import type { AppProps } from "next/app";

import Favicon from "../public/favicon.ico";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dev Events</title>
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" type="image/x-icon" href={Favicon.src} />
        <meta name="description" content="یک وبسایت برای برنامه نویسان علاقه مند به شرکت در رویداد های برنامه نویسی" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
