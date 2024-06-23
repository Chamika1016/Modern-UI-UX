import React from "react";
import Image from "next/image";
import Logo from "../../public/Logo.svg";
import Facebook from "../../public/Facebook.svg";
import Twitter from "../../public/X.svg";
import Feed from "../../public/Feed.svg";

function Footer() {
  return (
    <div className="pt-[80px] pb-[40px]">
      <div className="flex items-center justify-center gap-x-[15px]">
        <Image src={Logo} alt="logo" />
        <p className="font-bold text-[#36485c] text-[17px]">
          Chamika Lakshitha
        </p>
      </div>
      <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485c] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
        <li>Features</li>
        <li>Pricing</li>
        <li>Enterprise</li>
        <li>Careers</li>
      </ul>
      <p className="pt-[56px] text-center text-[14px] font-medium text-[#5f7896] sm:pt-5">
        Copyright 2024
      </p>
      <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
        <Image src={Facebook} alt="facebook" />
        <Image src={Feed} alt="feed" />
        <Image src={Twitter} alt="twitter" />
      </div>
    </div>
  );
}

export default Footer;
