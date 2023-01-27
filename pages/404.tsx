import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import localFont from "@next/font/local";
import "../styles/globals.css";
import Banner from "../components/banner";
import Link from "next/link";
import { styles } from "../styles";

const iranyekan = localFont({
  src: [
    {
      path: "../public/fonts/IRANYekanWebThin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanWebLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanWebRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanWebMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanWebBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanWebExtraBold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
});

function Error404() {
  return (
    <div className={`${iranyekan.className} `}>
      <header>
        <Banner />
        <Navbar />
      </header>
      <div className="bg-[url('../public/404-background.svg')] bg-contain bg-left h-[45rem] bg-no-repeat flex flex-col conte items-center justify-center pl-96  lg:pl-0 lg:items-end lg:bg-[url('')]">
        <div className="mt-[-12rem]  flex flex-col conte items-center">
          <h1 className="text-[7rem] font-semibold text-white">۴۰۴</h1>
          <h2 className="text-dark text-[1.5rem] font-medium">اوپس .... متاسفانه صفحه مورد نظر یافت نشد</h2>
          <p className="mt-6 text-dim-dark text-[1.25rem]">
            این صفحه وجود ندارد یا حذف شده است! پیشنهاد می کنیم به خانه برگردید.
          </p>
          <Link href="/" className={`mt-12 ${styles.primary} !px-20`}>
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
      <div className="mt-[-11.5rem]">
        <Footer />
      </div>
    </div>
  );
}

export default Error404;
