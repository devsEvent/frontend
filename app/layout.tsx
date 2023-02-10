import Banner from "../components/layout/banner";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

import { IranYekan } from "../public/fonts";

import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <head />

      <body className={`${IranYekan.className} `}>
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
