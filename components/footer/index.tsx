import Image from "next/image";
import React from "react";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "../../public/icons/social";

function Footer() {
  return (
    <footer>
      <div className="mt-20 p-9 bg-secondary">Footer</div>

      <div className="px-9 py-2 bg-primary flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Image src={TwitterIcon} alt="twitter icon" className="h-6" />
          <Image src={FacebookIcon} alt="facebook icon" className="h-6" />
          <Image src={LinkedInIcon} alt="linkedin icon" className="h-6" />
          <Image src={InstagramIcon} alt="instgram icon" className="h-6" />
        </div>
        <h4 className="text-white text-[.9rem]">
          {new Date().getFullYear()} :: © تمامی حقوق مادی و معنوی برای دو ایونت میباشد ...
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
