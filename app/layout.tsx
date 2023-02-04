import Banner from "../components/banner";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import localFont from "@next/font/local";

import "../styles/globals.css";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />

      <body className={`${iranyekan.className} `}>
        <header>
          <Banner />
          <Navbar />
        </header>

        <div className="mt-6 mx-auto max-w-full xl:max-w-[95rem]">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
