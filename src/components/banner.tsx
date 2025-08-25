import Image from "next/image";
import React from "react";
import BannerImg from "../assets/image/banner.png";
import LogoImg from "../assets/image/logo.png";

const Banner = () => {
  return (
    <div className="relative w-full h-[190px] md:h-[300px]">
      <Image
        className="opacity-50"
        src={BannerImg}
        alt="banner"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="z-10 h-[116px] sm:h-[174px] w-[116px] sm:w-[174px] absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
        <Image className="" src={LogoImg} alt="logo" fill />
      </div>
    </div>
  );
};

export default Banner;
