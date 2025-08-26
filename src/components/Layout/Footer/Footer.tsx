"use client";
import React from "react";
import { FooterContainer } from "./Footer.styles";
import { Body2 } from "@/components/Typography/Body.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Body2 $color="#000" $size={15}>
        Copyright © 2024 My MDD Diary
      </Body2>
    </FooterContainer>
  );
};

export default Footer;
