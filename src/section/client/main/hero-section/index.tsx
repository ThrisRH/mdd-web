"use client";
import Image from "next/image";
import React from "react";
import BannerImg from "@/assets/image/banner.png";
import LogoImg from "@/assets/image/logo.png";
import { BannerContainer, Logo } from "./styled";

const Banner = () => {
  return (
    <BannerContainer>
      <Image
        className="opacity-50"
        src={BannerImg}
        alt="banner"
        fill
        style={{ objectFit: "cover" }}
      />
      <Logo>
        <Image className="" src={LogoImg} alt="logo" fill />
      </Logo>
    </BannerContainer>
  );
};

export default Banner;
