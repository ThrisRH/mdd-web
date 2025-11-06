"use client";
import React from "react";
import { FooterContainer } from "./style";
import { Text } from "@/styles/theme/typography";

const Footer = () => {
  return (
    <FooterContainer>
      <Text $variant="body2" $color="#000" $size={15}>
        Copyright © 2024 My MDD Diary
      </Text>
    </FooterContainer>
  );
};

export default Footer;
