"use client";
import React from "react";
import { FooterContainer } from "./Footer.styles";
import { Body } from "@/components/Typography/Body.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Body $variant="body2" $color="#000" $size={15}>
        Copyright © 2024 My MDD Diary
      </Body>
    </FooterContainer>
  );
};

export default Footer;
